package ru.mortihead.controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import ru.mortihead.domain.CarItem;
import ru.mortihead.model.CarEntity;
import ru.mortihead.service.CarService;


import java.util.Collection;

@RestController
@RequiredArgsConstructor
@RequestMapping("/car")
@Slf4j
public class CarController {
    private final CarService carService;

    @GetMapping
    @ResponseBody
    public Collection<CarEntity> getCars(String search) {
        Collection<CarEntity> res = carService.getCars(search);
        log.warn("car.size=" + res.size());
        return res;
    }

    @PostMapping
    @ResponseBody
    public ExtResult saveCar(@RequestBody CarItem car) {
        return new ExtResult(carService.save(car), car);
    }

    @DeleteMapping(value = "{id}")
    @ResponseBody
    public String deleteCar(@RequestBody CarEntity carEntity) {
        carService.delete(carEntity);
        return "delete";
    }

    @PutMapping(value = "{id}")
    @ResponseBody
    public String updateCar(@RequestBody CarEntity carEntity) {
        carService.update(carEntity);
        return "update";
    }
}