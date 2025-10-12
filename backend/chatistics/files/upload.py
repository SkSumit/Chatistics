from io import TextIOWrapper

def parsefile(file):
    try:
        try:
            file.stream.seek(0)
        except Exception:
            try:
                file.seek(0)
            except Exception:
                pass
        data = file.read()  # FileStorage.read() proxies to stream.read()
        if isinstance(data, bytes):
            text = data.decode("utf-8", errors="replace")
        else:
            text = data

        lines = text.splitlines()
        return lines
    except Exception:
        raise Exception("File cannot be parsed at the moment")
