from flask import Flask, render_template
from api_routes import bp1
from chatbot import chatbot_bp
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

app.register_blueprint(bp1)
app.register_blueprint(chatbot_bp)

@app.route('/')
def home():
    return render_template('Home.html')

@app.route('/predict')
def predict():
    return render_template('index.html')

@app.route('/chatbot')
def chatbot():
    return render_template('ChatBot.html')

if __name__ == "__main__":
    app.run(debug=True)