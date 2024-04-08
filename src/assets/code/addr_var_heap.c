#include <stdio.h>  // printf
#include <stdlib.h> // malloc and free

int main() {
	int *x = (int *) malloc(sizeof(int));
	printf("The address of x  is %p\n", &x);
	printf("The address of *x is %p\n",  x);
	free(x);
	return 0;
}

