
import flask_sqlalchemy

db = flask_sqlalchemy.SQLAlchemy()


class Dogs(db.Model):
    __tablename__ = "dogs"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    price = db.Column(db.Integer)
    breed = db.Column(db.String(100))