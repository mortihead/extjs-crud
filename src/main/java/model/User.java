package model;

import java.io.Serializable;


public class User implements Serializable {
    String firstName;
    String lastName;
    int age;
    String eyeColor;

    public User(String firstName, String lastName, int age, String eyeColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.eyeColor = eyeColor;
    }

    public User() {
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getEyeColor() {
        return eyeColor;
    }

    public void setEyeColor(String eyeColor) {
        this.eyeColor = eyeColor;
    }

    @Override
    public String toString() {
        return "User{" +
                "firstName=" + firstName +
                ", lastName=" + lastName +
                ", age=" + age +
                ", eyeColor=" + eyeColor +
                '}';
    }

}
