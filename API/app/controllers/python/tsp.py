# importing datetime module for now()
import datetime
# generate random integer values
from random import seed
from random import randint
import sys
from sys import maxsize
from itertools import permutations

import matplotlib.pyplot as plt
import numpy as np
import random
import math
import json
import randomTSP
# V = 50


class TSP:
    def __init__(self, cities, iterations, algorithm) -> None:
        self.cities = self.generatePoints(cities)
        self.matrixDistance = self.generateDistances(cities)
        self.iterations = iterations
        self.algorithm = algorithm
        self.route = []

    def generatePoints(self, cities):
        x = random.sample(range(1, 100), cities)
        y = random.sample(range(1, 100), cities)
        return [x, y]

    def generateDistances(self, cities):
        # matrix = self.generatePoints(cities)
        nodes = [[0 for x in range(cities)] for y in range(cities)]
        # seed random number generator
        seed(datetime.datetime.now())
        for i in range(cities):
            for j in range(i, cities):
                if i == j:
                    nodes[i][j] = 0
                else:
                    value = math.dist([self.cities[0][i], self.cities[1][i]], [
                                      self.cities[0][j], self.cities[1][j]])
                    nodes[i][j] = round(value, 2)
                    nodes[j][i] = round(value, 2)
        return nodes

    def generateFinalRoute(self, route):
        x = []
        y = []
        for i in range(len(route)):
            x.append(self.cities[0][route[i]])
            y.append(self.cities[1][route[i]])

        return (x, y)

    def execute(self, s=0):
        solution = randomTSP.randomTSP(
            len(self.cities[0]), self.iterations, self.matrixDistance, self.cities)

        print(solution)
        self.route = self.generateFinalRoute(solution["route"])

        return solution

    def plot(self):
        plt.scatter(self.route[0], self.route[1])
        for i in range(0, len(self.cities[0])):
            plt.annotate(i, (self.cities[0][i], self.cities[1][i]))
        plt.plot(self.route[0], self.route[1])
        plt.show()


cities = sys.argv[1]
iterations = sys.argv[2]
algorithm = sys.argv[3]

# matrix representation of graph
TSP = TSP(int(cities), int(iterations), int(algorithm))
TSP.execute()
# TSP.plot()

sys.stdout.flush()
