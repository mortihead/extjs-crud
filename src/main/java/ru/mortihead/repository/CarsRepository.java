package ru.mortihead.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ru.mortihead.model.CarEntity;

import java.util.List;

@Repository
public interface CarsRepository extends JpaRepository<CarEntity, String>, JpaSpecificationExecutor<CarEntity>  {
    @Query("select e from CarEntity e where e.name = :name and e.price = :price")
    List<CarEntity> findByCar(String name, Integer price);
}
