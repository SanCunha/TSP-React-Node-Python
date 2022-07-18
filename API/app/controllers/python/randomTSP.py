from sys import maxsize
import random
import json


def randomTSP(cities, iterations, matrixDistance, coords, s=0):
    next_permutation = []
    vertex = list(range(0, cities))
    idx = 0
    for i in range(0, iterations):

        vertex = sorted(vertex, key=lambda k: random.random())
        next_permutation.append(vertex)

    min_path = maxsize
    route = []
    logs = []
    for i in next_permutation:

        # store current Path weight(cost)
        current_pathweight = 0
        routeCurrent = []

        # compute current path weight
        k = s
        for j in i:
            current_pathweight += matrixDistance[k][j]
            k = j
            routeCurrent.append(k)
        current_pathweight += matrixDistance[k][s]
        routeCurrent.append(routeCurrent[0])
        # update minimum
        if (current_pathweight < min_path):
            min_path = current_pathweight
            route = routeCurrent

        if idx % 5 == 0:
            logs.append({
                "iteration": idx,
                "route": route,
                "value": min_path
            })

        idx += 1

    return json.dumps({
        "route": route,
        "value": min_path,
        "logs": logs,
        "coords": coords
    })
