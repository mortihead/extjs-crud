package controllers;

import java.lang.management.ManagementFactory;
import java.lang.management.OperatingSystemMXBean;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import model.Greeting;
import model.User;
import org.apache.log4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    final static Logger logger = Logger.getLogger(HelloController.class);

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping(value = "/greeting",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Greeting greeting(@RequestParam(value = "name", required = false, defaultValue = "World") String name) {
        logger.warn("greeting ==>");
        return new Greeting(counter.incrementAndGet(),
                String.format(template, name));
    }

    @RequestMapping(value = "/greeting2")
    public String greeting2(@RequestParam(value = "name", required = false, defaultValue = "World") String name) throws JsonProcessingException {
        Greeting res = new Greeting(counter.incrementAndGet(),
                String.format(template, name));
        ObjectMapper mapper = new ObjectMapper();
        String jsonString = mapper.writeValueAsString(res);
        return jsonString;

    }

    @RequestMapping("/hello")
    public String hello() {
        OperatingSystemMXBean osBean = ManagementFactory.getOperatingSystemMXBean();
        String infoString = "Arch: %s\nProcessors: %d\nOS Name: %s\nOS Version: %s\n";
        return String.format(infoString, osBean.getArch(), osBean.getAvailableProcessors(), osBean.getName(),
                osBean.getVersion());
    }

    @RequestMapping("/users")
    public List<User> getUsers() {
        logger.warn("getUsers ==>");
        List<User> res = new ArrayList<>();
        res.add(new User("Nikolai", "B.", 43, "brown"));
        res.add(new User("Oscar", "A.", 34, "red"));
        res.add(new User("Lily", "C.", 25, "yellow"));
        res.add(new User("July", "B.", 35, "clear"));
        return res;
    }
}