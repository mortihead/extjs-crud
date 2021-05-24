package ru.mortihead.controllers;

import lombok.Data;
import ru.mortihead.domain.CarItem;

@Data
public class ExtResult {
    private boolean success;
    private CarItem data;


    public ExtResult(boolean success, CarItem data) {
        this.success = success;
        this.data = data;
    }

    public ExtResult() {
    }

}