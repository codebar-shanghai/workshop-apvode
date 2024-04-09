// caller.c
#include <stdio.h>  // for printf()
#include "callee.h" // for sum()
// Or you can use this
// extern int sum(int, int);

int main() {
	int x = 1;
	int y = 2;
	int z = sum(x, y);
	printf("The result is %d\n", z);
	return 0;
}

