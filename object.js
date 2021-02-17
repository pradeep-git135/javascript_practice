var Car = {
    car_brand:"tesla",
    car_model:"model1",
    car_price:"35000",
    autopilot:function(){
        document.write("it ha a feature of autopilot")
    }
}
//Car.autopilot()
//document.write(Car.autopilot())

Car.fueltype = "electricity"
document.write(Car.fueltype)
delete Car.fueltype
document.write(Car.fueltype)

