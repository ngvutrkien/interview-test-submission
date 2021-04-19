const Dot = require('./Dot');

class Dots extends PIXI.Container
{
    constructor()
    {
        super();

        // Linked List
        this.head = null;
        this.tail = null;
        this.currentNode = null;
        this.direction = 0;

        this.isFinished = false;
    }

    InitDots(name)
    {
        let dots = DataDefine.dots[name];
        let dotSize = 30;
        dots.forEach(dot =>
        {
            let node = new Dot(dot, dotSize);
            this.addChild(node);

            // Linked List
            this.AddToTail(node);
        });

        this.isFinished = false;
    }

    Unload()
    {
        this.UnlinkAllNodes();
        this.removeChildren();
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Linked List
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    AddToHead(node)
    {
        node.next = this.head;
        node.prev = null;
        if (this.head) // list is not empty
        {
            this.head.prev = node;
            this.head = node;
        }
        else // list is empty
        {
            this.tail = node;
            this.head = node;
        }
    }

    AddToTail(node)
    {
        node.next = null;
        node.prev = this.tail;
        if (this.tail) // list is not empty
        {
            this.tail.next = node;
            this.tail = node;
        }
        else // list is empty
        {
            this.head = node;
            this.tail = node;
        }
    }

    UnlinkAllNodes()
    {
        let curNode = this.head;
        while (curNode)
        {
            let temp = curNode.next;
            curNode.prev = null;
            curNode.next = null;
            curNode = temp;
        }
        this.head = null;
        this.tail = null;
    }

    PrintList()
    {
        let curNode = this.head;
        while (curNode)
        {
            console.dir(curNode);
            curNode = curNode.next;
        }
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    TouchHandler(event)
    {
        if (this.isFinished) return;

        let touch = {
            x: Input.touchX + Input.touchDX,
            y: Input.touchY + Input.touchDY
        };

        if (Input.IsTouchDown(event))
        {
            let touch = {
                x: Input.touchX,
                y: Input.touchY
            };
            if (!this.currentNode)
            {
                let rectHead = this.head.GetRect();
                let rectTail = this.tail.GetRect();
                if (Utils.CollisionPointRect(touch.x, touch.y, rectHead))
                {
                    this.currentNode = this.head;
                    this.direction = 1;
                }
                else if (Utils.CollisionPointRect(touch.x, touch.y, rectTail))
                {
                    this.currentNode = this.tail;
                    this.direction = -1;
                }
            }
        }
        else if (Input.IsTouchMove(event))
        {
            if (this.currentNode)
            {
                let rect = this.currentNode.GetRect();
                if (Utils.CollisionPointRect(touch.x, touch.y, rect))
                {
                    this.currentNode = this.direction > 0 ? this.currentNode.next : this.currentNode.prev;
                    if (!this.currentNode) // Reach end node. Should finish game now
                    {
                        this.isFinished = true;
                    }
                }
            }
        }
        else if (Input.IsTouchUp(event))
        {
            this.currentNode = null;
            this.direction = 0;
        }
    }
};

module.exports = new Dots();