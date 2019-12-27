package controllers;

import model.Car;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

import service.CarService;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Controller
@RequestMapping("/car")
public class CarController {
    final static Logger logger = Logger.getLogger(CarController.class);

    @Autowired
    private CarService carService;


    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Collection<Car> getCars(String search) {
//                Car c = new Car();
//                c.setName("1111");
//                c.setPrice(new Long(1000));
//        List<Car> l = new ArrayList();
//        l.add(c);
        Collection<Car> res = carService.getCars(search);
        logger.warn("car.size="+res.size());
        return res;
//        return l;
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ExtResult setCar(Car car, HttpServletRequest request) {
        return new ExtResult(carService.add(car), car);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteCar(@RequestBody Car car) {
        carService.delete(car);
        return "delete";
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    @ResponseBody
    public String updateCar(@RequestBody Car car) {
        carService.update(car);
        return "update";
    }
}