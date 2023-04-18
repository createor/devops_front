from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route("/test/api/login", methods=['POST'])
def login():
    data = request.get_data()
    if data['username'] == 'admin' and data['password'] == '123456':
        return jsonify({
            "code": 200,
            "token": "123456",
            "msg": "用户登陆成功"
        }), 200
    else:
        return jsonify({
            "code": 401,
            "msg": "用户名或密码错误"
        }), 401


@app.route("/test/api/user", methods=['GET'])
def user():
    return jsonify({
        "code": 200,
        "msg": {
            "id": 1,  # 用户id
            "role": ["admin"],  # 用户角色
            "path": ["/home", "/user"]  # 用户权限
        }
    }), 200


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=90, debug=True)
