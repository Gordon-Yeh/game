function movement () {
    if (playerIsHuman) {
        if (keyIsDown(LEFT_ARROW)) {
            humanPosX -= playerMovementSpeed;
            sendData('humanPosX', humanPosX);
        }

        if (keyIsDown(RIGHT_ARROW)) {
            humanPosX += playerMovementSpeed;
            sendData('humanPosX', humanPosX);
        }

        if (keyIsDown(UP_ARROW)) {
            humanPosY -= playerMovementSpeed;
            sendData('humanPosY', humanPosY);
        }

        if (keyIsDown(DOWN_ARROW)) {
            humanPosY += playerMovementSpeed;
            sendData('humanPosY', humanPosY);
        }

    } else if (!playerIsHuman) {
        if (keyIsDown(LEFT_ARROW)) {
            ghostPosX -= playerMovementSpeed;
            sendData('ghostPosX', ghostPosX);
        }

        if (keyIsDown(RIGHT_ARROW)) {
            ghostPosX += playerMovementSpeed;
            sendData('ghostPosX', ghostPosX);
        }

        if (keyIsDown(UP_ARROW)) {
            ghostPosY -= playerMovementSpeed;
            sendData('ghostPosY', ghostPosY);
        }

        if (keyIsDown(DOWN_ARROW)) {
            ghostPosY += playerMovementSpeed;
            sendData('ghostPosY', ghostPosY);
        }
    }
}