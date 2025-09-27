from flask import Flask, render_template

app = Flask(__name__, template_folder='templates')  # Set template_folder to your 'navbar' folder

@app.route('/')
def index():
    return render_template('index.html', active_page='home')

@app.route('/about')
def about():
    return render_template('about.html', active_page='about')

@app.route('/programs')
def programs():
    return render_template('programs.html', active_page='programs')

@app.route('/get-involved')
def get_involved():
    return render_template('get-involved.html', active_page='involved')

@app.route('/donate')
def donate():
    return render_template('donate.html', active_page='donate')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html', active_page='gallery')

@app.route('/contact')
def contact():
    return render_template('contact.html', active_page='contact')

if __name__ == '__main__':
    app.run(debug=True)
