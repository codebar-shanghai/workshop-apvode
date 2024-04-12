#include <stdio.h>  // for printf()
#include <fcntl.h>  // for open() and O_RDWR
#include <unistd.h> // for close()

int main() {
	// Attempt to open /dev/null
	int fd = open("/dev/null", O_RDWR);
	printf("The file discriptor is %d\n", fd);
	close(fd); // otherwise memory leak
	return 0;
}

