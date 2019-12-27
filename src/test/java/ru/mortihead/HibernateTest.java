package ru.mortihead;

import model.Car;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.cfg.Configuration;
import org.junit.After;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import service.CarService;

import java.util.Collection;
import java.util.List;

import static org.junit.Assert.*;

public class HibernateTest {

    private SessionFactory sessionFactory;
    private Session session = null;

    @Before
    public void before() {
        // setup the session factory
        Configuration configuration = new Configuration();
        configuration.addAnnotatedClass(Car.class);

        //   configuration.configure("hibernate.cfg.xml");

        configuration.setProperty("hibernate.dialect", "org.hibernate.dialect.H2Dialect");
        configuration.setProperty("hibernate.show_sql", "true");
        configuration.setProperty("hibernate.connection.driver_class", "org.h2.Driver");
        configuration.setProperty("hibernate.connection.username", "sa");
        configuration.setProperty("hibernate.connection.password", "sql");
        configuration.setProperty("hibernate.connection.url", "jdbc:h2:tcp://127.0.0.1:9092/local_db");
        configuration.setProperty("hibernate.hbm2ddl.auto", "validate");

        StandardServiceRegistryBuilder builder = new StandardServiceRegistryBuilder().applySettings(configuration.getProperties());
        sessionFactory = configuration.buildSessionFactory(builder.build());

        // sessionFactory = configuration.buildSessionFactory();
        session = sessionFactory.openSession();
    }


    @Test
    public void testInit() {

        CarService service = new CarService();
        Collection<Car> cars = service.getCars(null);
        cars.forEach(c -> {
            System.out.println(c.toString());
        });


    }

    @After
    public void after() {
        if (session != null) {
            session.close();
        }
        if (sessionFactory != null) {
            sessionFactory.close();
        }
    }
}
