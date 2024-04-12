#include <stdio.h> // for printf()
#include <fcntl.h> // for open() and O_RDWR

int main() {
	// Attempt to open /dev/null
	int fd = open("/dev/null", O_RDWR);
	printf("The file discriptor is %d\n", fd);
	return 0;
}

