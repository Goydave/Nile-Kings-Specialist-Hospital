from flask import Flask
from app.models import db  # Import the SQLAlchemy instance

def create_app():
    app = Flask(__name__)

    # App configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///appointment.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = 'your-secret-key'  # Optional, useful for forms/flash messages

    # Initialize the database with the app
    db.init_app(app)

    # Register Blueprints
    from app.routes import main
    app.register_blueprint(main)

    return app


