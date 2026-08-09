from flask import Flask, jsonify
from datetime import datetime

app = Flask(__name__)

@app.get("/api/status")
def status():
    return jsonify({
        "message": "Backend is healthy",
        "service": "OpsPulse API",
        "timestamp": datetime.utcnow().isoformat() + "Z"
    })

@app.get("/api/health")
def health():
    return jsonify({"status": "UP"})
