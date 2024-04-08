#include <stdio.h>
#define SIZE 3

int main() {
	int a[SIZE];
	int i;

	printf("The address of a    is %p\n", &a);
	for (i = 0; i < SIZE; i++) {
		printf("The address of a[%d] is %p\n",
			i,
			&a[i]
		);
	}

	return 0;
}

