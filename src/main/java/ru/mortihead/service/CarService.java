package ru.mortihead.service;

import ru.mortihead.domain.CarItem;
import ru.mortihead.model.CarEntity;

import java.util.Collection;

public interface CarService {
    Boolean save(CarItem carItem);

    void update(CarEntity carEntity);

    Collection<CarEntity> getCars(String search);

    void delete(CarEntity carEntity);
}
