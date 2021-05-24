package ru.mortihead;

import ru.mortihead.model.CarEntity;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import ru.mortihead.service.CarServiceImpl;

import java.util.Collection;

public class HibernateTest {

    private SessionFactory sessionFactory;
    private Session session = null;

    @Before
    public void before() {
        // setup the session factory
        Configuration configuration = new Configuration();
        configuration.addAnnotatedClass(CarEntity.class);

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

        //todo: передалть тесты по-правильному!
//        CarServiceImpl service = new CarServiceImp();
//        Collection<CarEntity> carEntities = service.getCars(null);
//        carEntities.forEach(c -> {
//            System.out.println(c.toString());
//        });


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
