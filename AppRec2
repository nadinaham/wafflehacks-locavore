from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd 

df_content = pd.read_csv("collab_sim.csv")
app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_from_root():
    return jsonify(message='Hello from root!')

@app.route("/recms", methods = ["POST"])
def make_rec():
    if request.method == "POST":
        data = request.json
        biz = data["go_id"]
        try: 
            similar_score = df_content[biz]
            similar_places = similar_score.sort_values(ascending=False)[1:5]
            api_recommendations = similar_places.index.to_list()
        except:
            api_recommendations = ['Business not found']
        return {"rec_business":api_recommendations}
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)