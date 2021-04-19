class Utils
{
    Collision2Rect(rect1, rect2)
    {
        if (
            Math.max(rect1.x, rect1.x + rect1.width) < Math.min(rect2.x, rect2.x + rect2.width)
            || Math.min(rect1.x, rect1.x + rect1.width) > Math.max(rect2.x, rect2.x + rect2.width)
            || Math.max(rect1.y, rect1.y + rect1.height) < Math.min(rect2.y, rect2.y + rect2.height)
            || Math.min(rect1.y, rect1.y + rect1.height) > Math.max(rect2.y, rect2.y + rect2.height)
        )
        {
            return false;
        }

        return true;
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    CollisionPointRect(px, py, rect)
    {
        if (px < rect.x || py < rect.y || px > rect.x + rect.width || py > rect.y + rect.height)
        {
            return false;
        }

        return true;
    }
}

module.exports = new Utils();