#include <stdio.h>
#define SIZE 3

int main() {
	int a[SIZE];
	int i;

	for (i = 0; i < SIZE; i++) {
		printf("The value of a[%d] is %d\n",
		i,
		a[i]);
	}

	return 0;
}

