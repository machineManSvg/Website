from flask import Flask, jsonify, render_template
import os

app = Flask(__name__)

IMAGE_FOLDER = "assets/pictures"

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/images")
def get_images():
    # Return all images in the folder
    images = [f for f in os.listdir(IMAGE_FOLDER) if f.lower().endswith((".jpg", ".jpeg", ".png", ".gif"))]
    return jsonify(images)

if __name__ == "__main__":
    app.run(debug=True)
