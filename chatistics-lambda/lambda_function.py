import json 
import base64 
from io import StringIO
from dataframe.preprocessing import preprocess 
from dataframe.dataframe import dataframe 
import insights
import re

def lambda_handler(event, context): 
    """ Lambda entry point: 
    - Accepts .txt file uploads (raw text or binary) 
    - Extracts contents using a helper method 
    - Returns metadata and total line count """ 

    cors = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
        "Access-Control-Allow-Headers": "Content-Type,X-File-Name",
    }

    try: 
        is_b64 = event.get("isBase64Encoded", False) 
        body = event.get("body", "") 
        if not body: 
            raise Exception("No file data received") 
        if is_b64: 
            file_bytes = base64.b64decode(body) 
        else: 
            file_bytes = body.encode("utf-8", errors="replace") 
 
        contents,filename = extract_file_contents(file_bytes) 
        date, time, username, messages = preprocess(contents)
        df = dataframe(date, time, username, messages)
        csv_buf = StringIO()
        df.to_csv(csv_buf, index=False)
        csv_buf.seek(0)
        whatsapp = insights.getData()
        new_insights = whatsapp.analysis(df, filename)
        return {
            "statusCode": 200,
            "headers": {"Content-Type": "application/json", **cors},
            "body": json.dumps(new_insights, ensure_ascii=False, default=str)
        }
    except Exception as e: 
        return { 
            "statusCode": 400, 
            "headers": {"Content-Type": "application/json"}, 
            "body": json.dumps({"error": str(e)}) 
        } 

def extract_file_contents(file_bytes: bytes) -> tuple: 
    """ Reads and processes an uploaded text file (from bytes). 
    Returns metadata and total number of non-empty lines. """ 
    try: 
        size_bytes = len(file_bytes)
        try: 
            text = file_bytes.decode("utf-8") 
            encoding_used = "utf-8" 
        except UnicodeDecodeError: 
            text = file_bytes.decode("latin1") 
            encoding_used = "latin1" 
            # Split into lines and remove blanks 
        lines = [ln.strip() for ln in text.splitlines() if ln.strip()]
        filename = "upload"
        match = re.search(r'filename="([^"]+)"', lines[1])
        if match:
            filename = match.group(1)
        return lines[3:-1],filename
    except Exception as e: 
        raise Exception(f"Failed to extract file contents: {e}")