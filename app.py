from flask import Flask, render_template


app = Flask("BMI Calculator")


@app.route("/")
def calculator_per_main_page():
    return render_template("calculator.html")


@app.route("/bmi-introduction")
def bmi_introduction():
    return render_template("bmi_introduction.html")


def main():
    app.run(
        debug=True
    )


if __name__ == '__main__':
    main()