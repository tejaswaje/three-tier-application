FROM python:3

ADD . .

RUN pip install -r conf/requirements.txt

ENV FLASK_APP=app.py

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_HOST=postgres
ENV POSTGRES_PORT=5432
ENV POSTGRES_DB=dogs

ENTRYPOINT ["python", "-m", "flask", "run", "--host=0.0.0.0"]