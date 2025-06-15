from flask import Flask
from app.models import db  # Import the SQLAlchemy instance
import os  # ✅ Required to get environment variables

def create_app():
    app = Flask(__name__)

    # App configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')  # ✅ Secure, flexible
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'your-secret-key')  # ✅ Safe fallback

    # Initialize the database with the app
    db.init_app(app)

    # Register Blueprints
    from app.routes import main
    app.register_blueprint(main)

    return app
