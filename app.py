from flask import Flask, render_template, request
#import os

app=Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")


@app.route('/home', methods=['GET', 'POST'])
def index():
    return render_template("index.html")


if __name__=="__main__":
    app.run(debug=True)
    
    