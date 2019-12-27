package service;

import dao.CarDao;
import model.Car;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.List;

public class CarService {

    private CarDao carDao = new CarDao();

    public CarDao getCarDao() {
        return carDao;
    }

    public void setCarDao(CarDao carDao) {
        this.carDao = carDao;
    }

    @Transactional
    public Boolean add(Car car) {
        List<Car> duplicate = carDao.findByCar(car.getName(), car.getPrice());
        if (duplicate.isEmpty()) {
            carDao.add(car);
            return true;
        }
        return false;
    }

    @Transactional
    public void update(Car car) {
        carDao.update(car);
    }

    @Transactional
    public Collection<Car> getCars(String search) {
        return carDao.findAll();
    }

    @Transactional
    public void delete(Car car) {
        carDao.delete(car);
    }
}
