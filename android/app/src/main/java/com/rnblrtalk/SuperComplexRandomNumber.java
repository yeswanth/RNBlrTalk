package com.rnblrtalk;

import java.util.Random;

public class SuperComplexRandomNumber {

    public static int getRandomNumber(int min, int max) {
        return new Random().nextInt((max - min) + 1) - min;
    }
}