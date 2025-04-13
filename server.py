from flask import Flask, send_from_directory
import os

app = Flask(__name__)

# Разрешаем доступ ко всем файлам в текущей папке
@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory('.', filename)

@app.route('/')
def home():
    return send_from_directory('.', 'index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
