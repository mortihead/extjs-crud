package ru.mortihead.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.mortihead.domain.CarItem;
import ru.mortihead.model.CarEntity;
import ru.mortihead.repository.CarsRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.List;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class CarServiceImpl implements CarService {

    private final CarsRepository carsRepo;

    @Transactional
    public Boolean save(CarItem carItem) {
        CarEntity car;
        if (isInteger(carItem.getId())) {
            car = carsRepo.findById(carItem.getId()).orElseThrow(() -> new IllegalStateException("Car id: " + carItem.getId() + " not found!"));
            car.setName(carItem.getName());
            car.setPrice(carItem.getPrice());
            carsRepo.save(car);
            return true;
        }
        List<CarEntity> duplicate = carsRepo.findByCar(carItem.getName(), carItem.getPrice());
        if (duplicate.isEmpty()) {
            car = new CarEntity();
            car.setName(carItem.getName());
            car.setPrice(carItem.getPrice());
            carsRepo.save(car);
            return true;
        } else {
            return false;
        }
    }

    @Transactional
    public void update(CarEntity carEntity) {
        carsRepo.save(carEntity);
    }

    @Transactional
    public Collection<CarEntity> getCars(String search) {
        return carsRepo.findAll();
    }

    @Transactional
    public void delete(CarEntity carEntity) {
        carsRepo.deleteById(carEntity.getId().toString());
    }

    public static boolean isInteger(String s) {
        try {
            Integer.parseInt(s);
        } catch (NumberFormatException e) {
            return false;
        } catch (NullPointerException e) {
            return false;
        }
        // only got here if we didn't return false
        return true;
    }
}
