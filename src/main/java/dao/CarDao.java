package dao;

import model.Car;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.SQLQuery;

import utils.HibernateUtils;

import java.math.BigInteger;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class CarDao {

    public Car findById(int id) {
        return (Car) HibernateUtils.getSessionFactory().openSession().get(Car.class, id);
    }

    public void save(Car car) {
        Session session = HibernateUtils.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.save(car);
        tx1.commit();
        session.close();
    }

    public void add(Car car) {
        Session session = HibernateUtils.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.persist(car);
        tx1.commit();
        session.close();
    }

    public void update(Car car) {
        Session session = HibernateUtils.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.update(car);
        tx1.commit();
        session.close();
    }

    public void delete(Car car) {
        Session session = HibernateUtils.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.delete(car);
        tx1.commit();
        session.close();
    }

    public List<Car> findByCar(String name, Long price) {
        Session session = HibernateUtils.getSessionFactory().openSession();
        Query query = session.createQuery("from Car where name = :name and price = :price");
        query.setParameter("name", name);
        query.setParameter("price", price);
        return query.list();
    }


    public List<Car> findAll() {
        return (List<Car>) HibernateUtils.getSessionFactory().openSession().createQuery("From Car").list();
    }
}
