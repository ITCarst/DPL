/**
 AStar

 Copyright (c) 2010, Brian Grinstead, http://briangrinstead.com

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

/**
 HTML5 Boilerplate

 Copyright (c) HTML5 Boilerplate

 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do
 so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

/**
 hammer.js

 Copyright (C) 2013 by Jorik Tangelder (Eight Media)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 */

/**

 howler.js

 Copyright (c) 2013 James Simpson and GoldFire Studios, Inc.

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */

/**

 pixi.js

 The MIT License

 Copyright (c) 2013-2014 Mathew Groves

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 */

/**

 state-machine.js

 Copyright (c) 2012, 2013 Jake Gordon and contributors

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

/**

 tween.js

 The MIT License

 Copyright (c) 2010-2012 Tween.js authors.

 Easing equations Copyright (c) 2001 Robert Penner http://robertpenner.com/easing/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 */


function GraphNode(t, e, i) {
    this.data = {}, this.x = t, this.y = e, this.pos = {
        x: t,
        y: e
    }, this.type = i
}

function BinaryHeap(t) {
    this.content = [], this.scoreFunction = t
}(function () {
    function HEXtoRGB(t) {
        return [(255 & t >> 16) / 255, (255 & t >> 8) / 255, (255 & t) / 255]
    }

    function determineMatrixArrayType() {
        return PIXI.Matrix = "undefined" != typeof Float32Array ? Float32Array : Array, PIXI.Matrix
    }
    var root = this,
        PIXI = PIXI || {};
    PIXI.Point = function (t, e) {
        this.x = t || 0, this.y = e || 0
    }, PIXI.Point.prototype.clone = function () {
        return new PIXI.Point(this.x, this.y)
    }, PIXI.Point.constructor = PIXI.Point, PIXI.Rectangle = function (t, e, i, n) {
        this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = n || 0
    }, PIXI.Rectangle.prototype.clone = function () {
        return new PIXI.Rectangle(this.x, this.y, this.width, this.height)
    }, PIXI.Rectangle.constructor = PIXI.Rectangle, PIXI.DisplayObject = function () {
        this.position = new PIXI.Point, this.scale = new PIXI.Point(1, 1), this.pivot = new PIXI.Point(0, 0), this.rotation = 0, this.alpha = 1, this.visible = !0, this.worldVisible = !1, this.parent = null, this.stage = null, this.hitArea = null, this.worldAlpha = 1, this.color = [], this.worldTransform = PIXI.mat3.create(), this.localTransform = PIXI.mat3.create(), this.dynamic = !0, this._sr = 0, this._cr = 1, this.childIndex = 0, this.renderable = !1, this.interactive = !1, this.buttonMode = !1
    }, PIXI.DisplayObject.constructor = PIXI.DisplayObject, PIXI.DisplayObject.prototype.setInteractive = function (t) {
        this.interactive = t, this.stage && (this.stage.dirty = !0)
    }, PIXI.DisplayObject.prototype.updateTransform = function () {
        this.rotation != this.rotationCache && (this.rotationCache = this.rotation, this._sr = Math.sin(this.rotation), this._cr = Math.cos(this.rotation));
        var t = this.localTransform,
            e = this.parent.worldTransform,
            i = this.worldTransform;
        t[0] = this._cr * this.scale.x, t[1] = -this._sr * this.scale.y, t[3] = this._sr * this.scale.x, t[4] = this._cr * this.scale.y;
        var n = this.pivot.x,
            o = this.pivot.y;
        t[2] = this.position.x - t[0] * n - o * t[1], t[5] = this.position.y - t[4] * o - n * t[3];
        var r = t[0],
            s = t[1],
            a = t[2],
            h = t[3],
            u = t[4],
            l = t[5],
            c = e[0],
            d = e[1],
            p = e[2],
            f = e[3],
            m = e[4],
            g = e[5];
        i[0] = c * r + d * h, i[1] = c * s + d * u, i[2] = c * a + d * l + p, i[3] = f * r + m * h, i[4] = f * s + m * u, i[5] = f * a + m * l + g, this.worldAlpha = this.alpha * this.parent.worldAlpha
    }, PIXI.DisplayObjectContainer = function () {
        PIXI.DisplayObject.call(this), this.children = [], this.renderable = !1
    }, PIXI.DisplayObjectContainer.constructor = PIXI.DisplayObjectContainer, PIXI.DisplayObjectContainer.prototype = Object.create(PIXI.DisplayObject.prototype), PIXI.DisplayObjectContainer.prototype.addChild = function (t) {
        void 0 != t.parent && t.parent.removeChild(t), t.parent = this, t.childIndex = this.children.length, this.children.push(t), this.stage && this.stage.__addChild(t), this.__renderGroup && (t.__renderGroup && t.__renderGroup.removeDisplayObjectAndChildren(t), this.__renderGroup.addDisplayObjectAndChildren(t))
    }, PIXI.DisplayObjectContainer.prototype.addChildAt = function (t, e) {
        if (!(e >= 0 && this.children.length >= e)) throw Error(t + " The index " + e + " supplied is out of bounds " + this.children.length);
        void 0 != t.parent && t.parent.removeChild(t), e == this.children.length ? this.children.push(t) : this.children.splice(e, 0, t), t.parent = this, t.childIndex = e;
        for (var i = this.children.length, n = e; i > n; n++) this.children[n].childIndex = n;
        this.stage && this.stage.__addChild(t), this.__renderGroup && (t.__renderGroup && t.__renderGroup.removeDisplayObjectAndChildren(t), this.__renderGroup.addDisplayObjectAndChildren(t))
    }, PIXI.DisplayObjectContainer.prototype.swapChildren = function (t, e) {
        var i = this.children.indexOf(t),
            n = this.children.indexOf(e);
        if (-1 === i || -1 === n) throw Error(t + " Both the supplied DisplayObjects must be a child of the caller " + this);
        this.stage && (this.stage.__removeChild(t), this.stage.__removeChild(e), this.stage.__addChild(t), this.stage.__addChild(e)), t.childIndex = n, e.childIndex = i, this.children[i] = e, this.children[n] = t
    }, PIXI.DisplayObjectContainer.prototype.getChildAt = function (t) {
        if (t >= 0 && this.children.length > t) return this.children[t];
        throw Error(child + " Both the supplied DisplayObjects must be a child of the caller " + this)
    }, PIXI.DisplayObjectContainer.prototype.removeChild = function (t) {
        var e = this.children.indexOf(t);
        if (-1 === e) throw Error(t + " The supplied DisplayObject must be a child of the caller " + this);
        this.stage && this.stage.__removeChild(t), t.__renderGroup && t.__renderGroup.removeDisplayObjectAndChildren(t), t.parent = void 0, this.children.splice(e, 1);
        for (var i = e, n = this.children.length; n > i; i++) this.children[i].childIndex -= 1
    }, PIXI.DisplayObjectContainer.prototype.updateTransform = function () {
        if (this.visible) {
            PIXI.DisplayObject.prototype.updateTransform.call(this);
            for (var t = 0, e = this.children.length; e > t; t++) this.children[t].updateTransform()
        }
    }, PIXI.blendModes = {}, PIXI.blendModes.NORMAL = 0, PIXI.blendModes.SCREEN = 1, PIXI.Sprite = function (t) {
        PIXI.DisplayObjectContainer.call(this), this.anchor = new PIXI.Point, this.texture = t, this.blendMode = PIXI.blendModes.NORMAL, this._width = 0, this._height = 0, t.baseTexture.hasLoaded ? this.updateFrame = !0 : (this.onTextureUpdateBind = this.onTextureUpdate.bind(this), this.texture.addEventListener("update", this.onTextureUpdateBind)), this.renderable = !0
    }, PIXI.Sprite.constructor = PIXI.Sprite, PIXI.Sprite.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), Object.defineProperty(PIXI.Sprite.prototype, "width", {
        get: function () {
            return this.scale.x * this.texture.frame.width
        },
        set: function (t) {
            this.scale.x = t / this.texture.frame.width, this._width = t
        }
    }), Object.defineProperty(PIXI.Sprite.prototype, "height", {
        get: function () {
            return this.scale.y * this.texture.frame.height
        },
        set: function (t) {
            this.scale.y = t / this.texture.frame.height, this._height = t
        }
    }), PIXI.Sprite.prototype.setTexture = function (t) {
        this.texture.baseTexture != t.baseTexture && (this.textureChange = !0), this.texture = t, this.updateFrame = !0
    }, PIXI.Sprite.prototype.onTextureUpdate = function () {
        this._width && (this.scale.x = this._width / this.texture.frame.width), this._height && (this.scale.y = this._height / this.texture.frame.height), this.updateFrame = !0
    }, PIXI.Sprite.fromFrame = function (t) {
        var e = PIXI.TextureCache[t];
        if (!e) throw Error("The frameId '" + t + "' does not exist in the texture cache" + this);
        return new PIXI.Sprite(e)
    }, PIXI.Sprite.fromImage = function (t) {
        var e = PIXI.Texture.fromImage(t);
        return new PIXI.Sprite(e)
    }, PIXI.MovieClip = function (t) {
        PIXI.Sprite.call(this, t[0]), this.textures = t, this.currentFrame = 0, this.animationSpeed = 1, this.loop = !0, this.onComplete = null, this.playing
    }, PIXI.MovieClip.constructor = PIXI.MovieClip, PIXI.MovieClip.prototype = Object.create(PIXI.Sprite.prototype), PIXI.MovieClip.prototype.stop = function () {
        this.playing = !1
    }, PIXI.MovieClip.prototype.play = function () {
        this.playing = !0
    }, PIXI.MovieClip.prototype.gotoAndStop = function (t) {
        this.playing = !1, this.currentFrame = t;
        var e = 0 | this.currentFrame + .5;
        this.setTexture(this.textures[e % this.textures.length])
    }, PIXI.MovieClip.prototype.gotoAndPlay = function (t) {
        this.currentFrame = t, this.playing = !0
    }, PIXI.MovieClip.prototype.updateTransform = function () {
        if (PIXI.Sprite.prototype.updateTransform.call(this), this.playing) {
            this.currentFrame += this.animationSpeed;
            var t = 0 | this.currentFrame + .5;
            this.loop || this.textures.length > t ? this.setTexture(this.textures[t % this.textures.length]) : t >= this.textures.length && (this.gotoAndStop(this.textures.length - 1), this.onComplete && this.onComplete())
        }
    }, PIXI.Text = function (t, e) {
        this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), PIXI.Sprite.call(this, PIXI.Texture.fromCanvas(this.canvas)), this.setText(t), this.setStyle(e), this.updateText(), this.dirty = !1
    }, PIXI.Text.constructor = PIXI.Text, PIXI.Text.prototype = Object.create(PIXI.Sprite.prototype), PIXI.Text.prototype.setStyle = function (t) {
        t = t || {}, t.font = t.font || "bold 20pt Arial", t.fill = t.fill || "black", t.align = t.align || "left", t.strokeThickness = t.strokeThickness || 0, this.style = t, this.dirty = !0
    }, PIXI.Sprite.prototype.setText = function (t) {
        this.text = t || " ", this.dirty = !0
    }, PIXI.Text.prototype.updateText = function () {
        this.context.font = this.style.font;
        for (var t = this.text.split(/(?:\r\n|\r|\n)/), e = [], i = 0, n = 0; t.length > n; n++) {
            var o = this.context.measureText(t[n])
                .width;
            e[n] = o, i = Math.max(i, o)
        }
        this.canvas.width = i + this.style.strokeThickness;
        var r = this.determineFontHeight("font: " + this.style.font + ";") + this.style.strokeThickness;
        for (this.canvas.height = r * t.length, this.context.fillStyle = this.style.fill, this.context.font = this.style.font, this.context.strokeStyle = this.style.stroke, this.context.lineWidth = this.style.strokeThickness, this.context.textBaseline = "top", n = 0; t.length > n; n++) {
            var s = new PIXI.Point(this.style.strokeThickness / 2, this.style.strokeThickness / 2 + n * r);
            "right" == this.style.align ? s.x += i - e[n] : "center" == this.style.align && (s.x += (i - e[n]) / 2), this.style.stroke && this.style.strokeThickness && this.context.strokeText(t[n], s.x, s.y), this.style.fill && this.context.fillText(t[n], s.x, s.y)
        }
        this.updateTexture()
    }, PIXI.Text.prototype.updateTexture = function () {
        this.texture.baseTexture.width = this.canvas.width, this.texture.baseTexture.height = this.canvas.height, this.texture.frame.width = this.canvas.width, this.texture.frame.height = this.canvas.height, this._width = this.canvas.width, this._height = this.canvas.height, PIXI.texturesToUpdate.push(this.texture.baseTexture)
    }, PIXI.Text.prototype.updateTransform = function () {
        this.dirty && (this.updateText(), this.dirty = !1), PIXI.Sprite.prototype.updateTransform.call(this)
    }, PIXI.Text.prototype.determineFontHeight = function (t) {
        var e = PIXI.Text.heightCache[t];
        if (!e) {
            var i = document.getElementsByTagName("body")[0],
                n = document.createElement("div"),
                o = document.createTextNode("M");
            n.appendChild(o), n.setAttribute("style", t), i.appendChild(n), e = n.offsetHeight, PIXI.Text.heightCache[t] = e, i.removeChild(n)
        }
        return e
    }, PIXI.Text.prototype.destroy = function (t) {
        t && this.texture.destroy()
    }, PIXI.Text.heightCache = {}, PIXI.BitmapText = function (t, e) {
        PIXI.DisplayObjectContainer.call(this), this.setText(t), this.setStyle(e), this.updateText(), this.dirty = !1
    }, PIXI.BitmapText.constructor = PIXI.BitmapText, PIXI.BitmapText.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), PIXI.BitmapText.prototype.setText = function (t) {
        this.text = t || " ", this.dirty = !0
    }, PIXI.BitmapText.prototype.setStyle = function (t) {
        t = t || {}, t.align = t.align || "left", this.style = t;
        var e = t.font.split(" ");
        this.fontName = e[e.length - 1], this.fontSize = e.length >= 2 ? parseInt(e[e.length - 2], 10) : PIXI.BitmapText.fonts[this.fontName].size, this.dirty = !0
    }, PIXI.BitmapText.prototype.updateText = function () {
        for (var t = PIXI.BitmapText.fonts[this.fontName], e = new PIXI.Point, i = null, n = [], o = 0, r = [], s = 0, a = this.fontSize / t.size, h = 0; this.text.length > h; h++) {
            var u = this.text.charCodeAt(h);
            if (/(?:\r\n|\r|\n)/.test(this.text.charAt(h))) r.push(e.x), o = Math.max(o, e.x), s++, e.x = 0, e.y += t.lineHeight, i = null;
            else {
                var l = t.chars[u];
                l && (i && l[i] && (e.x += l.kerning[i]), n.push({
                    line: s,
                    charCode: u,
                    position: new PIXI.Point(e.x + l.xOffset, e.y + l.yOffset)
                }), e.x += l.xAdvance, i = u)
            }
        }
        r.push(e.x), o = Math.max(o, e.x);
        var c = [];
        for (h = 0; s >= h; h++) {
            var d = 0;
            "right" == this.style.align ? d = o - r[h] : "center" == this.style.align && (d = (o - r[h]) / 2), c.push(d)
        }
        for (h = 0; n.length > h; h++) {
            var p = PIXI.Sprite.fromFrame(n[h].charCode);
            p.position.x = (n[h].position.x + c[n[h].line]) * a, p.position.y = n[h].position.y * a, p.scale.x = p.scale.y = a, this.addChild(p)
        }
        this.width = e.x * a, this.height = (e.y + t.lineHeight) * a
    }, PIXI.BitmapText.prototype.updateTransform = function () {
        if (this.dirty) {
            for (; this.children.length > 0;) this.removeChild(this.getChildAt(0));
            this.updateText(), this.dirty = !1
        }
        PIXI.DisplayObjectContainer.prototype.updateTransform.call(this)
    }, PIXI.BitmapText.fonts = {}, PIXI.InteractionManager = function (t) {
        this.stage = t, this.tempPoint = new PIXI.Point, this.mouseoverEnabled = !0, this.mouse = new PIXI.InteractionData, this.touchs = {}, this.pool = [], this.interactiveItems = [], this.last = 0
    }, PIXI.InteractionManager.constructor = PIXI.InteractionManager, PIXI.InteractionManager.prototype.collectInteractiveSprite = function (t, e) {
        for (var i = t.children, n = i.length, o = n - 1; o >= 0; o--) {
            var r = i[o];
            r.interactive ? (e.interactiveChildren = !0, this.interactiveItems.push(r), r.children.length > 0 && this.collectInteractiveSprite(r, r)) : (r.__iParent = null, r.children.length > 0 && this.collectInteractiveSprite(r, e))
        }
    }, PIXI.InteractionManager.prototype.setTarget = function (t) {
        window.navigator.msPointerEnabled && (t.view.style["-ms-content-zooming"] = "none", t.view.style["-ms-touch-action"] = "none"), this.target = t, t.view.addEventListener("mousemove", this.onMouseMove.bind(this), !0), t.view.addEventListener("mousedown", this.onMouseDown.bind(this), !0), document.body.addEventListener("mouseup", this.onMouseUp.bind(this), !0), t.view.addEventListener("mouseout", this.onMouseUp.bind(this), !0), t.view.addEventListener("touchstart", this.onTouchStart.bind(this), !0), t.view.addEventListener("touchend", this.onTouchEnd.bind(this), !0), t.view.addEventListener("touchmove", this.onTouchMove.bind(this), !0)
    }, PIXI.InteractionManager.prototype.update = function () {
        if (this.target) {
            var t = Date.now(),
                e = t - this.last;
            if (e = 30 * e / 1e3, !(1 > e)) {
                if (this.last = t, this.dirty) {
                    this.dirty = !1, this.interactiveItems.length;
                    for (var i = 0; this.interactiveItems.length > i; i++) this.interactiveItems[i].interactiveChildren = !1;
                    this.interactiveItems = [], this.stage.interactive && this.interactiveItems.push(this.stage), this.collectInteractiveSprite(this.stage, this.stage)
                }
                var n = this.interactiveItems.length;
                this.target.view.style.cursor = "default";
                for (var i = 0; n > i; i++) {
                    var o = this.interactiveItems[i];
                    o.visible && (o.mouseover || o.mouseout || o.buttonMode) && (o.__hit = this.hitTest(o, this.mouse), o.__hit ? (o.buttonMode && (this.target.view.style.cursor = "pointer"), o.__isOver || (o.mouseover && o.mouseover(this.mouse), o.__isOver = !0)) : o.__isOver && (o.mouseout && o.mouseout(this.mouse), o.__isOver = !1))
                }
            }
        }
    }, PIXI.InteractionManager.prototype.onMouseMove = function (t) {
        t.preventDefault();
        var e = this.target.view.getBoundingClientRect();
        this.mouse.global.x = (t.clientX - e.left) * (this.target.width / e.width), this.mouse.global.y = (t.clientY - e.top) * (this.target.height / e.height);
        var i = this.interactiveItems.length;
        this.mouse.global;
        for (var n = 0; i > n; n++) {
            var o = this.interactiveItems[n];
            o.mousemove && o.mousemove(this.mouse)
        }
    }, PIXI.InteractionManager.prototype.onMouseDown = function (t) {
        t.preventDefault();
        var e = this.interactiveItems.length;
        this.mouse.global, this.stage;
        for (var i = 0; e > i; i++) {
            var n = this.interactiveItems[i];
            if ((n.mousedown || n.click) && (n.__mouseIsDown = !0, n.__hit = this.hitTest(n, this.mouse), n.__hit && (n.mousedown && n.mousedown(this.mouse), n.__isDown = !0, !n.interactiveChildren))) break
        }
    }, PIXI.InteractionManager.prototype.onMouseUp = function (t) {
        t.preventDefault(), this.mouse.global;
        for (var e = this.interactiveItems.length, i = !1, n = 0; e > n; n++) {
            var o = this.interactiveItems[n];
            (o.mouseup || o.mouseupoutside || o.click) && (o.__hit = this.hitTest(o, this.mouse), o.__hit && !i ? (o.mouseup && o.mouseup(this.mouse), o.__isDown && o.click && o.click(this.mouse), o.interactiveChildren || (i = !0)) : o.__isDown && o.mouseupoutside && o.mouseupoutside(this.mouse), o.__isDown = !1)
        }
    }, PIXI.InteractionManager.prototype.hitTest = function (t, e) {
        var i = e.global;
        if (!t.visible) return !1;
        if (t instanceof PIXI.Sprite) {
            var n = t.worldTransform,
                o = n[0],
                r = n[1],
                s = n[2],
                a = n[3],
                h = n[4],
                u = n[5],
                l = 1 / (o * h + r * -a),
                c = h * l * i.x + -r * l * i.y + (u * r - s * h) * l,
                d = o * l * i.y + -a * l * i.x + (-u * o + s * a) * l,
                p = t.texture.frame.width,
                f = t.texture.frame.height,
                m = -p * t.anchor.x;
            if (c > m && m + p > c) {
                var g = -f * t.anchor.y;
                if (d > g && g + f > d) return e.target = t, !0
            }
        } else if (t.hitArea) {
            var n = t.worldTransform,
                v = t.hitArea,
                o = n[0],
                r = n[1],
                s = n[2],
                a = n[3],
                h = n[4],
                u = n[5],
                l = 1 / (o * h + r * -a),
                c = h * l * i.x + -r * l * i.y + (u * r - s * h) * l,
                d = o * l * i.y + -a * l * i.x + (-u * o + s * a) * l,
                m = v.x;
            if (c > m && m + v.width > c) {
                var g = v.y;
                if (d > g && g + v.height > d) return !0
            }
        }
        for (var I = t.children.length, b = 0; I > b; b++) {
            var y = t.children[b],
                _ = this.hitTest(y, e);
            if (_) return !0
        }
        return !1
    }, PIXI.InteractionManager.prototype.onTouchMove = function (t) {
        t.preventDefault();
        for (var e = this.target.view.getBoundingClientRect(), i = t.changedTouches, n = 0; i.length > n; n++) {
            var o = i[n],
                r = this.touchs[o.identifier];
            r.global.x = (o.clientX - e.left) * (this.target.width / e.width), r.global.y = (o.clientY - e.top) * (this.target.height / e.height)
        }
        for (var s = this.interactiveItems.length, n = 0; s > n; n++) {
            var a = this.interactiveItems[n];
            a.touchmove && a.touchmove(r)
        }
    }, PIXI.InteractionManager.prototype.onTouchStart = function (t) {
        t.preventDefault();
        for (var e = this.target.view.getBoundingClientRect(), i = t.changedTouches, n = 0; i.length > n; n++) {
            var o = i[n],
                r = this.pool.pop();
            r || (r = new PIXI.InteractionData), this.touchs[o.identifier] = r, r.global.x = (o.clientX - e.left) * (this.target.width / e.width), r.global.y = (o.clientY - e.top) * (this.target.height / e.height);
            for (var s = this.interactiveItems.length, a = 0; s > a; a++) {
                var h = this.interactiveItems[a];
                if ((h.touchstart || h.tap) && (h.__hit = this.hitTest(h, r), h.__hit && (h.touchstart && h.touchstart(r), h.__isDown = !0, h.__touchData = r, !h.interactiveChildren))) break
            }
        }
    }, PIXI.InteractionManager.prototype.onTouchEnd = function (t) {
        t.preventDefault();
        for (var e = this.target.view.getBoundingClientRect(), i = t.changedTouches, n = 0; i.length > n; n++) {
            var o = i[n],
                r = this.touchs[o.identifier],
                s = !1;
            r.global.x = (o.clientX - e.left) * (this.target.width / e.width), r.global.y = (o.clientY - e.top) * (this.target.height / e.height);
            for (var a = this.interactiveItems.length, h = 0; a > h; h++) {
                var u = this.interactiveItems[h],
                    l = u.__touchData;
                u.__hit = this.hitTest(u, r), l == r && ((u.touchend || u.tap) && (u.__hit && !s ? (u.touchend && u.touchend(r), u.__isDown && u.tap && u.tap(r), u.interactiveChildren || (s = !0)) : u.__isDown && u.touchendoutside && u.touchendoutside(r), u.__isDown = !1), u.__touchData = null)
            }
            this.pool.push(r), this.touchs[o.identifier] = null
        }
    }, PIXI.InteractionData = function () {
        this.global = new PIXI.Point, this.local = new PIXI.Point, this.target
    }, PIXI.InteractionData.prototype.getLocalPosition = function (t) {
        var e = t.worldTransform,
            i = this.global,
            n = e[0],
            o = e[1],
            r = e[2],
            s = e[3],
            a = e[4],
            h = e[5],
            u = 1 / (n * a + o * -s);
        return new PIXI.Point(a * u * i.x + -o * u * i.y + (h * o - r * a) * u, n * u * i.y + -s * u * i.x + (-h * n + r * s) * u)
    }, PIXI.InteractionData.constructor = PIXI.InteractionData, PIXI.Stage = function (t, e) {
        PIXI.DisplayObjectContainer.call(this), this.worldTransform = PIXI.mat3.create(), this.__childrenAdded = [], this.__childrenRemoved = [], this.childIndex = 0, this.stage = this, this.stage.hitArea = new PIXI.Rectangle(0, 0, 1e5, 1e5), this.interactive = !! e, this.interactionManager = new PIXI.InteractionManager(this), this.setBackgroundColor(t), this.worldVisible = !0
    }, PIXI.Stage.constructor = PIXI.Stage, PIXI.Stage.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), PIXI.Stage.prototype.updateTransform = function () {
        this.worldAlpha = 1;
        for (var t = 0, e = this.children.length; e > t; t++) this.children[t].updateTransform();
        this.dirty && (this.dirty = !1, this.interactionManager.dirty = !0), this.interactive && this.interactionManager.update()
    }, PIXI.Stage.prototype.setBackgroundColor = function (t) {
        this.backgroundColor = t || 0, this.backgroundColorSplit = HEXtoRGB(this.backgroundColor), this.backgroundColorString = "#" + this.backgroundColor.toString(16)
    }, PIXI.Stage.prototype.getMousePosition = function () {
        return this.interactionManager.mouse.global
    }, PIXI.Stage.prototype.__addChild = function (t) {
        if (t.interactive && (this.dirty = !0), t.stage = this, t.children)
            for (var e = 0; t.children.length > e; e++) this.__addChild(t.children[e])
    }, PIXI.Stage.prototype.__removeChild = function (t) {
        if (t.interactive && (this.dirty = !0), t.stage = void 0, t.children)
            for (var e = 0, i = t.children.length; i > e; e++) this.__removeChild(t.children[e])
    }, window.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
            window.setTimeout(t, 1e3 / 60)
        }
    }(), "function" != typeof Function.prototype.bind && (Function.prototype.bind = function () {
        var t = Array.prototype.slice;
        return function (e) {
            function i() {
                var r = o.concat(t.call(arguments));
                n.apply(this instanceof i ? this : e, r)
            }
            var n = this,
                o = t.call(arguments, 1);
            if ("function" != typeof n) throw new TypeError;
            return i.prototype = function r(t) {
                return t && (r.prototype = t), this instanceof r ? void 0 : new r
            }(n.prototype), i
        }
    }());
    var AjaxRequest = function () {
        var t = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
        if (!window.ActiveXObject) return window.XMLHttpRequest ? new XMLHttpRequest : !1;
        for (var e = 0; t.length > e; e++) try {
            return new ActiveXObject(t[e])
        } catch (i) {}
    };
    PIXI.EventTarget = function () {
        var t = {};
        this.addEventListener = this.on = function (e, i) {
            void 0 === t[e] && (t[e] = []), -1 === t[e].indexOf(i) && t[e].push(i)
        }, this.dispatchEvent = this.emit = function (e) {
            for (var i in t[e.type]) t[e.type][i](e)
        }, this.removeEventListener = this.off = function (e, i) {
            var n = t[e].indexOf(i); - 1 !== n && t[e].splice(n, 1)
        }
    }, determineMatrixArrayType(), PIXI.mat3 = {}, PIXI.mat3.create = function () {
        var t = new PIXI.Matrix(9);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
    }, PIXI.mat4 = {}, PIXI.mat4.create = function () {
        var t = new PIXI.Matrix(16);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, PIXI.mat3.multiply = function (t, e, i) {
        i || (i = t);
        var n = t[0],
            o = t[1],
            r = t[2],
            s = t[3],
            a = t[4],
            h = t[5],
            u = t[6],
            l = t[7],
            c = t[8],
            d = e[0],
            p = e[1],
            f = e[2],
            m = e[3],
            g = e[4],
            v = e[5],
            I = e[6],
            b = e[7],
            y = e[8];
        return i[0] = d * n + p * s + f * u, i[1] = d * o + p * a + f * l, i[2] = d * r + p * h + f * c, i[3] = m * n + g * s + v * u, i[4] = m * o + g * a + v * l, i[5] = m * r + g * h + v * c, i[6] = I * n + b * s + y * u, i[7] = I * o + b * a + y * l, i[8] = I * r + b * h + y * c, i
    }, PIXI.mat3.toMat4 = function (t, e) {
        return e || (e = PIXI.mat4.create()), e[15] = 1, e[14] = 0, e[13] = 0, e[12] = 0, e[11] = 0, e[10] = t[8], e[9] = t[7], e[8] = t[6], e[7] = 0, e[6] = t[5], e[5] = t[4], e[4] = t[3], e[3] = 0, e[2] = t[2], e[1] = t[1], e[0] = t[0], e
    }, PIXI.mat4.create = function () {
        var t = new PIXI.Matrix(16);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, PIXI.mat4.transpose = function (t, e) {
        if (!e || t === e) {
            var i = t[1],
                n = t[2],
                o = t[3],
                r = t[6],
                s = t[7],
                a = t[11];
            return t[1] = t[4], t[2] = t[8], t[3] = t[12], t[4] = i, t[6] = t[9], t[7] = t[13], t[8] = n, t[9] = r, t[11] = t[14], t[12] = o, t[13] = s, t[14] = a, t
        }
        return e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15], e
    }, PIXI.mat4.multiply = function (t, e, i) {
        i || (i = t);
        var n = t[0],
            o = t[1],
            r = t[2],
            s = t[3],
            a = t[4],
            h = t[5],
            u = t[6],
            l = t[7],
            c = t[8],
            d = t[9],
            p = t[10],
            f = t[11],
            m = t[12],
            g = t[13],
            v = t[14],
            I = t[15],
            b = e[0],
            y = e[1],
            _ = e[2],
            x = e[3];
        return i[0] = b * n + y * a + _ * c + x * m, i[1] = b * o + y * h + _ * d + x * g, i[2] = b * r + y * u + _ * p + x * v, i[3] = b * s + y * l + _ * f + x * I, b = e[4], y = e[5], _ = e[6], x = e[7], i[4] = b * n + y * a + _ * c + x * m, i[5] = b * o + y * h + _ * d + x * g, i[6] = b * r + y * u + _ * p + x * v, i[7] = b * s + y * l + _ * f + x * I, b = e[8], y = e[9], _ = e[10], x = e[11], i[8] = b * n + y * a + _ * c + x * m, i[9] = b * o + y * h + _ * d + x * g, i[10] = b * r + y * u + _ * p + x * v, i[11] = b * s + y * l + _ * f + x * I, b = e[12], y = e[13], _ = e[14], x = e[15], i[12] = b * n + y * a + _ * c + x * m, i[13] = b * o + y * h + _ * d + x * g, i[14] = b * r + y * u + _ * p + x * v, i[15] = b * s + y * l + _ * f + x * I, i
    }, PIXI.autoDetectRenderer = function (t, e, i, n) {
        t || (t = 800), e || (e = 600);
        var o = function () {
            try {
                return !!window.WebGLRenderingContext && !! document.createElement("canvas")
                    .getContext("experimental-webgl")
            } catch (t) {
                return !1
            }
        }();
        return o ? new PIXI.WebGLRenderer(t, e, i, n) : new PIXI.CanvasRenderer(t, e, i, n)
    }, PIXI.shaderFragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "void main(void) {", "gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));", "gl_FragColor = gl_FragColor * vColor;", "}"], PIXI.shaderVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform mat4 uMVMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "void main(void) {", "gl_Position = uMVMatrix * vec4(aVertexPosition, 1.0, 1.0);", "vTextureCoord = aTextureCoord;", "vColor = aColor;", "}"], PIXI.CompileVertexShader = function (t, e) {
        return PIXI._CompileShader(t, e, t.VERTEX_SHADER)
    }, PIXI.CompileFragmentShader = function (t, e) {
        return PIXI._CompileShader(t, e, t.FRAGMENT_SHADER)
    }, PIXI._CompileShader = function (t, e, i) {
        var n = e.join("\n"),
            o = t.createShader(i);
        return t.shaderSource(o, n), t.compileShader(o), t.getShaderParameter(o, t.COMPILE_STATUS) ? o : (alert(t.getShaderInfoLog(o)), null)
    }, PIXI._defaultFrame = new PIXI.Rectangle(0, 0, 1, 1), PIXI.gl, PIXI.WebGLRenderer = function (t, e, i, n) {
        this.transparent = !! n, this.width = t || 800, this.height = e || 600, this.view = i || document.createElement("canvas"), this.view.width = this.width, this.view.height = this.height;
        var o = this;
        this.view.addEventListener("webglcontextlost", function (t) {
            o.handleContextLost(t)
        }, !1), this.view.addEventListener("webglcontextrestored", function (t) {
            o.handleContextRestored(t)
        }, !1), this.batchs = [];
        try {
            PIXI.gl = this.gl = this.view.getContext("experimental-webgl", {
                alpha: this.transparent,
                antialias: !1,
                premultipliedAlpha: !0
            })
        } catch (r) {
            throw Error(" This browser does not support webGL. Try using the canvas renderer" + this)
        }
        this.initShaders();
        var s = this.gl;
        PIXI.WebGLRenderer.gl = s, this.batch = new PIXI.WebGLBatch(s), s.disable(s.DEPTH_TEST), s.disable(s.CULL_FACE), s.enable(s.BLEND), s.colorMask(!0, !0, !0, this.transparent), this.projectionMatrix = PIXI.mat4.create(), this.resize(this.width, this.height), this.contextLost = !1, this.stageRenderGroup = new PIXI.WebGLRenderGroup(this.gl)
    }, PIXI.WebGLRenderer.constructor = PIXI.WebGLRenderer, PIXI.WebGLRenderer.getBatch = function () {
        return 0 == PIXI._batchs.length ? new PIXI.WebGLBatch(PIXI.WebGLRenderer.gl) : PIXI._batchs.pop()
    }, PIXI.WebGLRenderer.returnBatch = function (t) {
        t.clean(), PIXI._batchs.push(t)
    }, PIXI.WebGLRenderer.prototype.initShaders = function () {
        var t = this.gl,
            e = PIXI.CompileFragmentShader(t, PIXI.shaderFragmentSrc),
            i = PIXI.CompileVertexShader(t, PIXI.shaderVertexSrc);
        PIXI.shaderProgram = t.createProgram();
        var n = PIXI.shaderProgram;
        t.attachShader(n, i), t.attachShader(n, e), t.linkProgram(n), t.getProgramParameter(n, t.LINK_STATUS) || alert("Could not initialise shaders"), t.useProgram(n), n.vertexPositionAttribute = t.getAttribLocation(n, "aVertexPosition"), t.enableVertexAttribArray(n.vertexPositionAttribute), n.textureCoordAttribute = t.getAttribLocation(n, "aTextureCoord"), t.enableVertexAttribArray(n.textureCoordAttribute), n.colorAttribute = t.getAttribLocation(n, "aColor"), t.enableVertexAttribArray(n.colorAttribute), n.mvMatrixUniform = t.getUniformLocation(n, "uMVMatrix"), n.samplerUniform = t.getUniformLocation(n, "uSampler")
    }, PIXI.WebGLRenderer.prototype.render = function (t) {
        if (!this.contextLost) {
            this.__stage !== t && (this.__stage = t, this.stageRenderGroup.setRenderable(t)), PIXI.WebGLRenderer.updateTextures(), t.updateTransform();
            var e = this.gl;
            if (e.colorMask(!0, !0, !0, this.transparent), e.viewport(0, 0, this.width, this.height), e.bindFramebuffer(e.FRAMEBUFFER, null), e.clearColor(t.backgroundColorSplit[0], t.backgroundColorSplit[1], t.backgroundColorSplit[2], this.transparent), e.clear(e.COLOR_BUFFER_BIT), this.stageRenderGroup.backgroundColor = t.backgroundColorSplit, this.stageRenderGroup.render(this.projectionMatrix), t.interactive && (t._interactiveEventsAdded || (t._interactiveEventsAdded = !0, t.interactionManager.setTarget(this))), PIXI.Texture.frameUpdates.length > 0) {
                for (var i = 0; PIXI.Texture.frameUpdates.length > i; i++) PIXI.Texture.frameUpdates[i].updateFrame = !1;
                PIXI.Texture.frameUpdates = []
            }
        }
    }, PIXI.WebGLRenderer.updateTextures = function () {
        for (var t = 0; PIXI.texturesToUpdate.length > t; t++) this.updateTexture(PIXI.texturesToUpdate[t]);
        for (var t = 0; PIXI.texturesToDestroy.length > t; t++) this.destroyTexture(PIXI.texturesToDestroy[t]);
        PIXI.texturesToUpdate = [], PIXI.texturesToDestroy = []
    }, PIXI.WebGLRenderer.updateTexture = function (t) {
        var e = PIXI.gl;
        t._glTexture || (t._glTexture = e.createTexture()), t.hasLoaded && (e.bindTexture(e.TEXTURE_2D, t._glTexture), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t.source), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), t._powerOf2 ? (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT)) : (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)), e.bindTexture(e.TEXTURE_2D, null))
    }, PIXI.WebGLRenderer.prototype.destroyTexture = function (t) {
        var e = this.gl;
        t._glTexture && (t._glTexture = e.createTexture(), e.deleteTexture(e.TEXTURE_2D, t._glTexture))
    }, PIXI.WebGLRenderer.prototype.resize = function (t, e) {
        this.width = t, this.height = e, this.view.width = t, this.view.height = e, this.gl.viewport(0, 0, this.width, this.height);
        var i = this.projectionMatrix;
        i[0] = 2 / this.width, i[5] = -2 / this.height, i[12] = -1, i[13] = 1
    }, PIXI.WebGLRenderer.prototype.handleContextLost = function (t) {
        t.preventDefault(), this.contextLost = !0
    }, PIXI.WebGLRenderer.prototype.handleContextRestored = function () {
        this.gl = this.view.getContext("experimental-webgl", {
            alpha: !0
        }), this.initShaders();
        for (var t = 0; PIXI.TextureCache.length > t; t++) this.updateTexture(PIXI.TextureCache[t]);
        for (var t = 0; this.batchs.length > t; t++) this.batchs[t].restoreLostContext(this.gl), this.batchs[t].dirty = !0;
        PIXI._restoreBatchs(this.gl), this.contextLost = !1
    }, PIXI._batchs = [], PIXI._getBatch = function (t) {
        return 0 == PIXI._batchs.length ? new PIXI.WebGLBatch(t) : PIXI._batchs.pop()
    }, PIXI._returnBatch = function (t) {
        t.clean(), PIXI._batchs.push(t)
    }, PIXI._restoreBatchs = function (t) {
        for (var e = 0; PIXI._batchs.length > e; e++) PIXI._batchs[e].restoreLostContext(t)
    }, PIXI.WebGLBatch = function (t) {
        this.gl = t, this.size = 0, this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), this.uvBuffer = t.createBuffer(), this.colorBuffer = t.createBuffer(), this.blendMode = PIXI.blendModes.NORMAL, this.dynamicSize = 1
    }, PIXI.WebGLBatch.constructor = PIXI.WebGLBatch, PIXI.WebGLBatch.prototype.clean = function () {
        this.verticies = [], this.uvs = [], this.indices = [], this.colors = [], this.dynamicSize = 1, this.texture = null, this.last = null, this.size = 0, this.head, this.tail
    }, PIXI.WebGLBatch.prototype.restoreLostContext = function (t) {
        this.gl = t, this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), this.uvBuffer = t.createBuffer(), this.colorBuffer = t.createBuffer()
    }, PIXI.WebGLBatch.prototype.init = function (t) {
        t.batch = this, this.dirty = !0, this.blendMode = t.blendMode, this.texture = t.texture.baseTexture, this.head = t, this.tail = t, this.size = 1, this.growBatch()
    }, PIXI.WebGLBatch.prototype.insertBefore = function (t, e) {
        this.size++, t.batch = this, this.dirty = !0;
        var i = e.__prev;
        e.__prev = t, t.__next = e, i ? (t.__prev = i, i.__next = t) : this.head = t
    }, PIXI.WebGLBatch.prototype.insertAfter = function (t, e) {
        this.size++, t.batch = this, this.dirty = !0;
        var i = e.__next;
        e.__next = t, t.__prev = e, i ? (t.__next = i, i.__prev = t) : this.tail = t
    }, PIXI.WebGLBatch.prototype.remove = function (t) {
        return this.size--, 0 == this.size ? (t.batch = null, t.__prev = null, t.__next = null, void 0) : (t.__prev ? t.__prev.__next = t.__next : (this.head = t.__next, this.head.__prev = null), t.__next ? t.__next.__prev = t.__prev : (this.tail = t.__prev, this.tail.__next = null), t.batch = null, t.__next = null, t.__prev = null, this.dirty = !0, void 0)
    }, PIXI.WebGLBatch.prototype.split = function (t) {
        this.dirty = !0;
        var e = new PIXI.WebGLBatch(this.gl);
        e.init(t), e.tail = this.tail, this.tail = t.__prev, this.tail.__next = null, t.__prev = null;
        for (var i = 0; t;) i++, t.batch = e, t = t.__next;
        return e.size = i, this.size -= i, e
    }, PIXI.WebGLBatch.prototype.merge = function (t) {
        this.dirty = !0, this.tail.__next = t.head, t.head.__prev = this.tail, this.size += t.size, this.tail = t.tail;
        for (var e = t.head; e;) e.batch = this, e = e.__next
    }, PIXI.WebGLBatch.prototype.growBatch = function () {
        var t = this.gl;
        this.dynamicSize = 1 == this.size ? 1 : 1.5 * this.size, this.verticies = new Float32Array(8 * this.dynamicSize), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, this.verticies, t.DYNAMIC_DRAW), this.uvs = new Float32Array(8 * this.dynamicSize), t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer), t.bufferData(t.ARRAY_BUFFER, this.uvs, t.DYNAMIC_DRAW), this.dirtyUVS = !0, this.colors = new Float32Array(4 * this.dynamicSize), t.bindBuffer(t.ARRAY_BUFFER, this.colorBuffer), t.bufferData(t.ARRAY_BUFFER, this.colors, t.DYNAMIC_DRAW), this.dirtyColors = !0, this.indices = new Uint16Array(6 * this.dynamicSize);
        for (var e = this.indices.length / 6, i = 0; e > i; i++) {
            var n = 6 * i,
                o = 4 * i;
            this.indices[n + 0] = o + 0, this.indices[n + 1] = o + 1, this.indices[n + 2] = o + 2, this.indices[n + 3] = o + 0, this.indices[n + 4] = o + 2, this.indices[n + 5] = o + 3
        }
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW)
    }, PIXI.WebGLBatch.prototype.refresh = function () {
        this.gl, this.dynamicSize < this.size && this.growBatch();
        for (var t, e = 0, i = this.head; i;) {
            t = 8 * e;
            var n = i.texture,
                o = n.frame,
                r = n.baseTexture.width,
                s = n.baseTexture.height;
            this.uvs[t + 0] = o.x / r, this.uvs[t + 1] = o.y / s, this.uvs[t + 2] = (o.x + o.width) / r, this.uvs[t + 3] = o.y / s, this.uvs[t + 4] = (o.x + o.width) / r, this.uvs[t + 5] = (o.y + o.height) / s, this.uvs[t + 6] = o.x / r, this.uvs[t + 7] = (o.y + o.height) / s, i.updateFrame = !1, colorIndex = 4 * e, this.colors[colorIndex] = this.colors[colorIndex + 1] = this.colors[colorIndex + 2] = this.colors[colorIndex + 3] = i.worldAlpha, i = i.__next, e++
        }
        this.dirtyUVS = !0, this.dirtyColors = !0
    }, PIXI.WebGLBatch.prototype.update = function () {
        this.gl;
        for (var t, e, i, n, o, r, s, a, h, u, l, c, d, p, f, m, g = 0, v = this.head; v;) {
            if (v.worldVisible) {
                if (e = v.texture.frame.width, i = v.texture.frame.height, n = v.anchor.x, o = v.anchor.y, r = e * (1 - n), s = e * -n, a = i * (1 - o), h = i * -o, u = 8 * g, t = v.worldTransform, l = t[0], c = t[3], d = t[1], p = t[4], f = t[2], m = t[5], this.verticies[u + 0] = l * s + d * h + f, this.verticies[u + 1] = p * h + c * s + m, this.verticies[u + 2] = l * r + d * h + f, this.verticies[u + 3] = p * h + c * r + m, this.verticies[u + 4] = l * r + d * a + f, this.verticies[u + 5] = p * a + c * r + m, this.verticies[u + 6] = l * s + d * a + f, this.verticies[u + 7] = p * a + c * s + m, v.updateFrame || v.texture.updateFrame) {
                    this.dirtyUVS = !0;
                    var I = v.texture,
                        b = I.frame,
                        y = I.baseTexture.width,
                        _ = I.baseTexture.height;
                    this.uvs[u + 0] = b.x / y, this.uvs[u + 1] = b.y / _, this.uvs[u + 2] = (b.x + b.width) / y, this.uvs[u + 3] = b.y / _, this.uvs[u + 4] = (b.x + b.width) / y, this.uvs[u + 5] = (b.y + b.height) / _, this.uvs[u + 6] = b.x / y, this.uvs[u + 7] = (b.y + b.height) / _, v.updateFrame = !1
                }
                if (v.cacheAlpha != v.worldAlpha) {
                    v.cacheAlpha = v.worldAlpha;
                    var x = 4 * g;
                    this.colors[x] = this.colors[x + 1] = this.colors[x + 2] = this.colors[x + 3] = v.worldAlpha, this.dirtyColors = !0
                }
            } else u = 8 * g, this.verticies[u + 0] = 0, this.verticies[u + 1] = 0, this.verticies[u + 2] = 0, this.verticies[u + 3] = 0, this.verticies[u + 4] = 0, this.verticies[u + 5] = 0, this.verticies[u + 6] = 0, this.verticies[u + 7] = 0;
            g++, v = v.__next
        }
    }, PIXI.WebGLBatch.prototype.render = function (t, e) {
        if (t = t || 0, void 0 == e && (e = this.size), this.dirty && (this.refresh(), this.dirty = !1), 0 != this.size) {
            this.update();
            var i = this.gl;
            i.blendFunc(i.ONE, i.ONE_MINUS_SRC_ALPHA);
            var n = PIXI.shaderProgram;
            i.useProgram(n), i.bindBuffer(i.ARRAY_BUFFER, this.vertexBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, this.verticies), i.vertexAttribPointer(n.vertexPositionAttribute, 2, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, this.uvBuffer), this.dirtyUVS && (this.dirtyUVS = !1, i.bufferSubData(i.ARRAY_BUFFER, 0, this.uvs)), i.vertexAttribPointer(n.textureCoordAttribute, 2, i.FLOAT, !1, 0, 0), i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, this.texture._glTexture), i.bindBuffer(i.ARRAY_BUFFER, this.colorBuffer), this.dirtyColors && (this.dirtyColors = !1, i.bufferSubData(i.ARRAY_BUFFER, 0, this.colors)), i.vertexAttribPointer(n.colorAttribute, 1, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            var o = e - t;
            i.drawElements(i.TRIANGLES, 6 * o, i.UNSIGNED_SHORT, 12 * t)
        }
    }, PIXI.WebGLRenderGroup = function (t) {
        this.gl = t, this.root, this.backgroundColor, this.batchs = [], this.toRemove = []
    }, PIXI.WebGLRenderGroup.constructor = PIXI.WebGLRenderGroup, PIXI.WebGLRenderGroup.prototype.setRenderable = function (t) {
        this.root && this.removeDisplayObjectAndChildren(this.root), t.worldVisible = t.visible, this.root = t, this.addDisplayObjectAndChildren(t)
    }, PIXI.WebGLRenderGroup.prototype.render = function (t) {
        PIXI.WebGLRenderer.updateTextures();
        var e = this.gl;
        e.uniformMatrix4fv(PIXI.shaderProgram.mvMatrixUniform, !1, t), this.checkVisibility(this.root, this.root.visible);
        for (var i, n = 0; this.batchs.length > n; n++) i = this.batchs[n], i instanceof PIXI.WebGLBatch ? this.batchs[n].render() : i instanceof PIXI.TilingSprite ? i.visible && this.renderTilingSprite(i, t) : i instanceof PIXI.Strip && i.visible && this.renderStrip(i, t)
    }, PIXI.WebGLRenderGroup.prototype.renderSpecific = function (t, e) {
        PIXI.WebGLRenderer.updateTextures();
        var i = this.gl;
        this.checkVisibility(t, t.visible), i.uniformMatrix4fv(PIXI.shaderProgram.mvMatrixUniform, !1, e);
        var n, o, r, s, a = t.renderable ? t : this.getNextRenderable(t),
            h = a.batch;
        if (a instanceof PIXI.Sprite) {
            h = a.batch;
            var u = h.head;
            if (u == a) n = 0;
            else
                for (n = 1; u.__next != a;) n++, u = u.__next
        } else h = a;
        for (var l, c = t, d = t; d.children.length > 0;) d = d.children[d.children.length - 1], d.renderable && (c = d);
        if (c instanceof PIXI.Sprite) {
            l = c.batch;
            var u = l.head;
            if (u == c) r = 0;
            else
                for (r = 1; u.__next != c;) r++, u = u.__next
        } else l = c; if (h == l) return h instanceof PIXI.WebGLBatch ? h.render(n, r + 1) : h instanceof PIXI.TilingSprite ? h.visible && this.renderTilingSprite(h, e) : h instanceof PIXI.Strip ? h.visible && this.renderStrip(h, e) : h instanceof PIXI.CustomRenderable && h.visible && h.renderWebGL(this, e), void 0;
        o = this.batchs.indexOf(h), s = this.batchs.indexOf(l), h instanceof PIXI.WebGLBatch ? h.render(n) : h instanceof PIXI.TilingSprite ? h.visible && this.renderTilingSprite(h, e) : h instanceof PIXI.Strip ? h.visible && this.renderStrip(h, e) : h instanceof PIXI.CustomRenderable && h.visible && h.renderWebGL(this, e);
        for (var p = o + 1; s > p; p++) renderable = this.batchs[p], renderable instanceof PIXI.WebGLBatch ? this.batchs[p].render() : renderable instanceof PIXI.TilingSprite ? renderable.visible && this.renderTilingSprite(renderable, e) : renderable instanceof PIXI.Strip ? renderable.visible && this.renderStrip(renderable, e) : renderable instanceof PIXI.CustomRenderable && renderable.visible && renderable.renderWebGL(this, e);
        l instanceof PIXI.WebGLBatch ? l.render(0, r + 1) : l instanceof PIXI.TilingSprite ? l.visible && this.renderTilingSprite(l) : l instanceof PIXI.Strip ? l.visible && this.renderStrip(l) : l instanceof PIXI.CustomRenderable && l.visible && l.renderWebGL(this, e)
    }, PIXI.WebGLRenderGroup.prototype.checkVisibility = function (t, e) {
        for (var i = t.children, n = 0; i.length > n; n++) {
            var o = i[n];
            o.worldVisible = o.visible && e, o.textureChange && (o.textureChange = !1, o.worldVisible && (this.removeDisplayObject(o), this.addDisplayObject(o))), o.children.length > 0 && this.checkVisibility(o, o.worldVisible)
        }
    }, PIXI.WebGLRenderGroup.prototype.addDisplayObject = function (t) {
        if (t.__renderGroup && t.__renderGroup.removeDisplayObjectAndChildren(t), t.__renderGroup = this, t.renderable) {
            var e = this.getPreviousRenderable(t),
                i = this.getNextRenderable(t);
            if (t instanceof PIXI.Sprite) {
                var n, o;
                if (e instanceof PIXI.Sprite) {
                    if (n = e.batch, n && n.texture == t.texture.baseTexture && n.blendMode == t.blendMode) return n.insertAfter(t, e), void 0
                } else n = e; if (i)
                    if (i instanceof PIXI.Sprite) {
                        if (o = i.batch) {
                            if (o.texture == t.texture.baseTexture && o.blendMode == t.blendMode) return o.insertBefore(t, i), void 0;
                            if (o == n) {
                                var r = n.split(i),
                                    s = PIXI.WebGLRenderer.getBatch(),
                                    a = this.batchs.indexOf(n);
                                return s.init(t), this.batchs.splice(a + 1, 0, s, r), void 0
                            }
                        }
                    } else o = i;
                var s = PIXI.WebGLRenderer.getBatch();
                if (s.init(t), n) {
                    var a = this.batchs.indexOf(n);
                    this.batchs.splice(a + 1, 0, s)
                } else this.batchs.push(s)
            } else t instanceof PIXI.TilingSprite ? (this.initTilingSprite(t), this.batchs.push(t)) : t instanceof PIXI.Strip && (this.initStrip(t), this.batchs.push(t));
            this.batchUpdate = !0
        }
    }, PIXI.WebGLRenderGroup.prototype.addDisplayObjectAndChildren = function (t) {
        this.addDisplayObject(t);
        for (var e = t.children, i = 0; e.length > i; i++) this.addDisplayObjectAndChildren(e[i])
    }, PIXI.WebGLRenderGroup.prototype.removeDisplayObject = function (t) {
        if (t.__renderGroup = null, t.renderable) {
            var e;
            if (t instanceof PIXI.Sprite) {
                var i = t.batch;
                if (!i) return;
                i.remove(t), 0 == i.size && (e = i)
            } else e = t; if (e) {
                var n = this.batchs.indexOf(e);
                if (-1 == n) return;
                if (0 == n || n == this.batchs.length - 1) return this.batchs.splice(n, 1), e instanceof PIXI.WebGLBatch && PIXI.WebGLRenderer.returnBatch(e), void 0;
                if (this.batchs[n - 1] instanceof PIXI.WebGLBatch && this.batchs[n + 1] instanceof PIXI.WebGLBatch && this.batchs[n - 1].texture == this.batchs[n + 1].texture && this.batchs[n - 1].blendMode == this.batchs[n + 1].blendMode) return this.batchs[n - 1].merge(this.batchs[n + 1]), e instanceof PIXI.WebGLBatch && PIXI.WebGLRenderer.returnBatch(e), PIXI.WebGLRenderer.returnBatch(this.batchs[n + 1]), this.batchs.splice(n, 2), void 0;
                this.batchs.splice(n, 1), e instanceof PIXI.WebGLBatch && PIXI.WebGLRenderer.returnBatch(e)
            }
        }
    }, PIXI.WebGLRenderGroup.prototype.removeDisplayObjectAndChildren = function (t) {
        if (t.__renderGroup == this) {
            this.removeDisplayObject(t);
            for (var e = t.children, i = 0; e.length > i; i++) this.removeDisplayObjectAndChildren(e[i])
        }
    }, PIXI.WebGLRenderGroup.prototype.getNextRenderable = function (t) {
        var e = t;
        do {
            if (0 == e.children.length) {
                if (!e.parent) return null;
                for (; e.childIndex == e.parent.children.length - 1;)
                    if (e = e.parent, e == this.root || !e.parent) {
                        e = null;
                        break
                    }
                e && (e = e.parent.children[e.childIndex + 1])
            } else e = e.children[0]; if (!e) break
        } while (!e.renderable || !e.__renderGroup);
        return e
    }, PIXI.WebGLRenderGroup.prototype.getPreviousRenderable = function (t) {
        var e = t;
        do {
            if (0 == e.childIndex) {
                if (e = e.parent, !e) return null
            } else
                for (e = e.parent.children[e.childIndex - 1]; 0 != e.children.length;) e = e.children[e.children.length - 1]; if (e == this.root) break
        } while (!e.renderable || !e.__renderGroup);
        return e
    }, PIXI.WebGLRenderGroup.prototype.initTilingSprite = function (t) {
        var e = this.gl;
        t.verticies = new Float32Array([0, 0, t.width, 0, t.width, t.height, 0, t.height]), t.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), t.colors = new Float32Array([1, 1, 1, 1]), t.indices = new Uint16Array([0, 1, 3, 2]), t._vertexBuffer = e.createBuffer(), t._indexBuffer = e.createBuffer(), t._uvBuffer = e.createBuffer(), t._colorBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, t._vertexBuffer), e.bufferData(e.ARRAY_BUFFER, t.verticies, e.STATIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, t._uvBuffer), e.bufferData(e.ARRAY_BUFFER, t.uvs, e.DYNAMIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, t._colorBuffer), e.bufferData(e.ARRAY_BUFFER, t.colors, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t._indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, t.indices, e.STATIC_DRAW), t.texture.baseTexture._glTexture ? (e.bindTexture(e.TEXTURE_2D, t.texture.baseTexture._glTexture), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT), t.texture.baseTexture._powerOf2 = !0) : t.texture.baseTexture._powerOf2 = !0
    }, PIXI.WebGLRenderGroup.prototype.renderStrip = function (t, e) {
        var i = this.gl,
            n = PIXI.shaderProgram,
            o = PIXI.mat3.toMat4(t.worldTransform);
        PIXI.mat4.transpose(o), PIXI.mat4.multiply(e, o, o), i.uniformMatrix4fv(n.mvMatrixUniform, !1, o), t.blendMode == PIXI.blendModes.NORMAL ? i.blendFunc(i.ONE, i.ONE_MINUS_SRC_ALPHA) : i.blendFunc(i.ONE, i.ONE_MINUS_SRC_COLOR), t.dirty ? (t.dirty = !1, i.bindBuffer(i.ARRAY_BUFFER, t._vertexBuffer), i.bufferData(i.ARRAY_BUFFER, t.verticies, i.STATIC_DRAW), i.vertexAttribPointer(n.vertexPositionAttribute, 2, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, t._uvBuffer), i.bufferData(i.ARRAY_BUFFER, t.uvs, i.STATIC_DRAW), i.vertexAttribPointer(n.textureCoordAttribute, 2, i.FLOAT, !1, 0, 0), i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, t.texture.baseTexture._glTexture), i.bindBuffer(i.ARRAY_BUFFER, t._colorBuffer), i.bufferData(i.ARRAY_BUFFER, t.colors, i.STATIC_DRAW), i.vertexAttribPointer(n.colorAttribute, 1, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t._indexBuffer), i.bufferData(i.ELEMENT_ARRAY_BUFFER, t.indices, i.STATIC_DRAW)) : (i.bindBuffer(i.ARRAY_BUFFER, t._vertexBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, t.verticies), i.vertexAttribPointer(n.vertexPositionAttribute, 2, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, t._uvBuffer), i.vertexAttribPointer(n.textureCoordAttribute, 2, i.FLOAT, !1, 0, 0), i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, t.texture.baseTexture._glTexture), i.bindBuffer(i.ARRAY_BUFFER, t._colorBuffer), i.vertexAttribPointer(n.colorAttribute, 1, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t._indexBuffer)), i.drawElements(i.TRIANGLE_STRIP, t.indices.length, i.UNSIGNED_SHORT, 0), i.uniformMatrix4fv(n.mvMatrixUniform, !1, e)
    }, PIXI.WebGLRenderGroup.prototype.renderTilingSprite = function (t, e) {
        var i = this.gl;
        PIXI.shaderProgram;
        var n = t.tilePosition,
            o = t.tileScale,
            r = n.x / t.texture.baseTexture.width,
            s = n.y / t.texture.baseTexture.height,
            a = t.width / t.texture.baseTexture.width / o.x,
            h = t.height / t.texture.baseTexture.height / o.y;
        t.uvs[0] = 0 - r, t.uvs[1] = 0 - s, t.uvs[2] = 1 * a - r, t.uvs[3] = 0 - s, t.uvs[4] = 1 * a - r, t.uvs[5] = 1 * h - s, t.uvs[6] = 0 - r, t.uvs[7] = 1 * h - s, i.bindBuffer(i.ARRAY_BUFFER, t._uvBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, t.uvs), this.renderStrip(t, e)
    }, PIXI.WebGLRenderer.prototype.initStrip = function (t) {
        var e = this.gl;
        this.shaderProgram, t._vertexBuffer = e.createBuffer(), t._indexBuffer = e.createBuffer(), t._uvBuffer = e.createBuffer(), t._colorBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, t._vertexBuffer), e.bufferData(e.ARRAY_BUFFER, t.verticies, e.DYNAMIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, t._uvBuffer), e.bufferData(e.ARRAY_BUFFER, t.uvs, e.STATIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, t._colorBuffer), e.bufferData(e.ARRAY_BUFFER, t.colors, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t._indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, t.indices, e.STATIC_DRAW)
    }, PIXI.CanvasRenderer = function (t, e, i, n) {
        this.transparent = n, this.width = t || 800, this.height = e || 600, this.refresh = !0, this.view = i || document.createElement("canvas"), this.view.width = this.width, this.view.height = this.height, this.count = 0, this.context = this.view.getContext("2d")
    }, PIXI.CanvasRenderer.constructor = PIXI.CanvasRenderer, PIXI.CanvasRenderer.prototype.render = function (t) {
        PIXI.texturesToUpdate = [], PIXI.texturesToDestroy = [], t.updateTransform(), this.view.style.backgroundColor == t.backgroundColorString || this.transparent || (this.view.style.backgroundColor = t.backgroundColorString), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.width, this.height), this.renderDisplayObject(t), t.interactive && (t._interactiveEventsAdded || (t._interactiveEventsAdded = !0, t.interactionManager.setTarget(this))), PIXI.Texture.frameUpdates.length > 0 && (PIXI.Texture.frameUpdates = [])
    }, PIXI.CanvasRenderer.prototype.resize = function (t, e) {
        this.width = t, this.height = e, this.view.width = t, this.view.height = e
    }, PIXI.CanvasRenderer.prototype.renderDisplayObject = function (t) {
        var e = t.worldTransform,
            i = this.context;
        if (t.visible) {
            if (t instanceof PIXI.Sprite) {
                var n = t.texture.frame;
                n && (i.globalAlpha = t.worldAlpha, i.setTransform(e[0], e[3], e[1], e[4], e[2], e[5]), i.drawImage(t.texture.baseTexture.source, n.x, n.y, n.width, n.height, t.anchor.x * -n.width, t.anchor.y * -n.height, n.width, n.height))
            } else t instanceof PIXI.Strip ? (i.setTransform(e[0], e[3], e[1], e[4], e[2], e[5]), this.renderStrip(t)) : t instanceof PIXI.TilingSprite ? (i.setTransform(e[0], e[3], e[1], e[4], e[2], e[5]), this.renderTilingSprite(t)) : t instanceof PIXI.CustomRenderable && t.renderCanvas(this);
            for (var o = 0; t.children.length > o; o++) this.renderDisplayObject(t.children[o]);
            this.context.setTransform(1, 0, 0, 1, 0, 0)
        }
    }, PIXI.CanvasRenderer.prototype.renderStripFlat = function (t) {
        var e = this.context,
            i = t.verticies;
        t.uvs;
        var n = i.length / 2;
        this.count++, e.beginPath();
        for (var o = 1; n - 2 > o; o++) {
            var r = 2 * o,
                s = i[r],
                a = i[r + 2],
                h = i[r + 4],
                u = i[r + 1],
                l = i[r + 3],
                c = i[r + 5];
            e.moveTo(s, u), e.lineTo(a, l), e.lineTo(h, c)
        }
        e.fillStyle = "#FF0000", e.fill(), e.closePath()
    }, PIXI.CanvasRenderer.prototype.renderTilingSprite = function (t) {
        var e = this.context;
        t.__tilePattern || (t.__tilePattern = e.createPattern(t.texture.baseTexture.source, "repeat")), e.beginPath();
        var i = t.tilePosition,
            n = t.tileScale;
        e.scale(n.x, n.y), e.translate(i.x, i.y), e.fillStyle = t.__tilePattern, e.fillRect(-i.x, -i.y, t.width / n.x, t.height / n.y), e.scale(1 / n.x, 1 / n.y), e.translate(-i.x, -i.y), e.closePath()
    }, PIXI.CanvasRenderer.prototype.renderStrip = function (t) {
        var e = this.context,
            i = t.verticies,
            n = t.uvs,
            o = i.length / 2;
        this.count++;
        for (var r = 1; o - 2 > r; r++) {
            var s = 2 * r,
                a = i[s],
                h = i[s + 2],
                u = i[s + 4],
                l = i[s + 1],
                c = i[s + 3],
                d = i[s + 5],
                p = n[s] * t.texture.width,
                f = n[s + 2] * t.texture.width,
                m = n[s + 4] * t.texture.width,
                g = n[s + 1] * t.texture.height,
                v = n[s + 3] * t.texture.height,
                I = n[s + 5] * t.texture.height;
            e.save(), e.beginPath(), e.moveTo(a, l), e.lineTo(h, c), e.lineTo(u, d), e.closePath(), e.clip();
            var b = p * v + g * m + f * I - v * m - g * f - p * I,
                y = a * v + g * u + h * I - v * u - g * h - a * I,
                _ = p * h + a * m + f * u - h * m - a * f - p * u,
                x = p * v * u + g * h * m + a * f * I - a * v * m - g * f * u - p * h * I,
                w = l * v + g * d + c * I - v * d - g * c - l * I,
                T = p * c + l * m + f * d - c * m - l * f - p * d,
                P = p * v * d + g * c * m + l * f * I - l * v * m - g * f * d - p * c * I;
            e.transform(y / b, w / b, _ / b, T / b, x / b, P / b), e.drawImage(t.texture.baseTexture.source, 0, 0), e.restore()
        }
    }, PIXI.Strip = function (t, e, i) {
        PIXI.DisplayObjectContainer.call(this), this.texture = t, this.blendMode = PIXI.blendModes.NORMAL;
        try {
            this.uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1]), this.verticies = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0]), this.colors = new Float32Array([1, 1, 1, 1]), this.indices = new Uint16Array([0, 1, 2, 3])
        } catch (n) {
            this.uvs = [0, 1, 1, 1, 1, 0, 0, 1], this.verticies = [0, 0, 0, 0, 0, 0, 0, 0, 0], this.colors = [1, 1, 1, 1], this.indices = [0, 1, 2, 3]
        }
        this.width = e, this.height = i, t.baseTexture.hasLoaded ? (this.width = this.texture.frame.width, this.height = this.texture.frame.height, this.updateFrame = !0) : (this.onTextureUpdateBind = this.onTextureUpdate.bind(this), this.texture.addEventListener("update", this.onTextureUpdateBind)), this.renderable = !0
    }, PIXI.Strip.constructor = PIXI.Strip, PIXI.Strip.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), PIXI.Strip.prototype.setTexture = function (t) {
        this.texture = t, this.width = t.frame.width, this.height = t.frame.height, this.updateFrame = !0
    }, PIXI.Strip.prototype.onTextureUpdate = function () {
        this.updateFrame = !0
    }, PIXI.Rope = function (t, e) {
        PIXI.Strip.call(this, t), this.points = e;
        try {
            this.verticies = new Float32Array(4 * e.length), this.uvs = new Float32Array(4 * e.length), this.colors = new Float32Array(2 * e.length), this.indices = new Uint16Array(2 * e.length)
        } catch (i) {
            this.verticies = verticies, this.uvs = uvs, this.colors = colors, this.indices = indices
        }
        this.refresh()
    }, PIXI.Rope.constructor = PIXI.Rope, PIXI.Rope.prototype = Object.create(PIXI.Strip.prototype), PIXI.Rope.prototype.refresh = function () {
        var t = this.points;
        if (!(1 > t.length)) {
            var e = this.uvs,
                i = this.indices,
                n = this.colors,
                o = t[0],
                r = t[0];
            this.count -= .2, e[0] = 0, e[1] = 1, e[2] = 0, e[3] = 1, n[0] = 1, n[1] = 1, i[0] = 0, i[1] = 1;
            for (var s = t.length, a = 1; s > a; a++) {
                var r = t[a],
                    h = 4 * a,
                    u = a / (s - 1);
                a % 2 ? (e[h] = u, e[h + 1] = 0, e[h + 2] = u, e[h + 3] = 1) : (e[h] = u, e[h + 1] = 0, e[h + 2] = u, e[h + 3] = 1), h = 2 * a, n[h] = 1, n[h + 1] = 1, h = 2 * a, i[h] = h, i[h + 1] = h + 1, o = r
            }
        }
    }, PIXI.Rope.prototype.updateTransform = function () {
        var t = this.points;
        if (!(1 > t.length)) {
            var e, i = this.verticies,
                n = t[0],
                o = {
                    x: 0,
                    y: 0
                }, r = t[0];
            this.count -= .2, i[0] = r.x + o.x, i[1] = r.y + o.y, i[2] = r.x - o.x, i[3] = r.y - o.y;
            for (var s = t.length, a = 1; s > a; a++) {
                var r = t[a],
                    h = 4 * a;
                e = t.length - 1 > a ? t[a + 1] : r, o.y = -(e.x - n.x), o.x = e.y - n.y;
                var u = 10 * (1 - a / (s - 1));
                u > 1 && (u = 1);
                var l = Math.sqrt(o.x * o.x + o.y * o.y),
                    c = this.texture.height / 2;
                o.x /= l, o.y /= l, o.x *= c, o.y *= c, i[h] = r.x + o.x, i[h + 1] = r.y + o.y, i[h + 2] = r.x - o.x, i[h + 3] = r.y - o.y, n = r
            }
            PIXI.DisplayObjectContainer.prototype.updateTransform.call(this)
        }
    }, PIXI.Rope.prototype.setTexture = function (t) {
        this.texture = t, this.updateFrame = !0
    }, PIXI.TilingSprite = function (t, e, i) {
        PIXI.DisplayObjectContainer.call(this), this.texture = t, this.width = e, this.height = i, this.renderable = !0, this.tileScale = new PIXI.Point(1, 1), this.tilePosition = new PIXI.Point(0, 0), this.blendMode = PIXI.blendModes.NORMAL
    }, PIXI.TilingSprite.constructor = PIXI.TilingSprite, PIXI.TilingSprite.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), PIXI.TilingSprite.prototype.setTexture = function (t) {
        this.texture = t, this.updateFrame = !0
    }, PIXI.TilingSprite.prototype.onTextureUpdate = function () {
        this.updateFrame = !0
    }, PIXI.CustomRenderable = function () {
        PIXI.DisplayObject.call(this)
    }, PIXI.CustomRenderable.constructor = PIXI.CustomRenderable, PIXI.CustomRenderable.prototype = Object.create(PIXI.DisplayObject.prototype), PIXI.CustomRenderable.prototype.renderCanvas = function () {}, PIXI.CustomRenderable.prototype.initWebGL = function () {}, PIXI.CustomRenderable.prototype.renderWebGL = function () {}, PIXI.BaseTextureCache = {}, PIXI.texturesToUpdate = [], PIXI.texturesToDestroy = [], PIXI.BaseTexture = function (t) {
        if (PIXI.EventTarget.call(this), this.width = 100, this.height = 100, this.source = t, t) {
            if (this.source instanceof Image)
                if (this.source.complete) this.hasLoaded = !0, this.width = this.source.width, this.height = this.source.height, PIXI.texturesToUpdate.push(this);
                else {
                    var e = this;
                    this.source.onload = function () {
                        e.hasLoaded = !0, e.width = e.source.width, e.height = e.source.height, PIXI.texturesToUpdate.push(e), e.dispatchEvent({
                            type: "loaded",
                            content: e
                        })
                    }
                } else this.hasLoaded = !0, this.width = this.source.width, this.height = this.source.height, PIXI.texturesToUpdate.push(this);
            this._powerOf2 = !1
        }
    }, PIXI.BaseTexture.constructor = PIXI.BaseTexture, PIXI.BaseTexture.prototype.destroy = function () {
        this.source instanceof Image && (this.source.src = null), this.source = null, PIXI.texturesToDestroy.push(this)
    }, PIXI.BaseTexture.fromImage = function (t, e) {
        var i = PIXI.BaseTextureCache[t];
        if (!i) {
            var n = new Image;
            e && (n.crossOrigin = ""), n.src = t, i = new PIXI.BaseTexture(n), PIXI.BaseTextureCache[t] = i
        }
        return i
    }, PIXI.TextureCache = {}, PIXI.FrameCache = {}, PIXI.Texture = function (t, e) {
        if (PIXI.EventTarget.call(this), e || (this.noFrame = !0, e = new PIXI.Rectangle(0, 0, 1, 1)), this.trim = new PIXI.Point, t instanceof PIXI.Texture && (t = t.baseTexture), this.baseTexture = t, this.frame = e, this.scope = this, t.hasLoaded) this.noFrame && (e = new PIXI.Rectangle(0, 0, t.width, t.height)), this.setFrame(e);
        else {
            var i = this;
            t.addEventListener("loaded", function () {
                i.onBaseTextureLoaded()
            })
        }
    }, PIXI.Texture.constructor = PIXI.Texture, PIXI.Texture.prototype.onBaseTextureLoaded = function () {
        var t = this.baseTexture;
        t.removeEventListener("loaded", this.onLoaded), this.noFrame && (this.frame = new PIXI.Rectangle(0, 0, t.width, t.height)), this.noFrame = !1, this.width = this.frame.width, this.height = this.frame.height, this.scope.dispatchEvent({
            type: "update",
            content: this
        })
    }, PIXI.Texture.prototype.destroy = function (t) {
        t && this.baseTexture.destroy()
    }, PIXI.Texture.prototype.setFrame = function (t) {
        if (this.frame = t, this.width = t.width, this.height = t.height, t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height) throw Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
        this.updateFrame = !0, PIXI.Texture.frameUpdates.push(this)
    }, PIXI.Texture.fromImage = function (t, e) {
        var i = PIXI.TextureCache[t];
        return i || (i = new PIXI.Texture(PIXI.BaseTexture.fromImage(t, e)), PIXI.TextureCache[t] = i), i
    }, PIXI.Texture.fromFrame = function (t) {
        var e = PIXI.TextureCache[t];
        if (!e) throw Error("The frameId '" + t + "' does not exist in the texture cache " + this);
        return e
    }, PIXI.Texture.fromCanvas = function (t) {
        var e = new PIXI.BaseTexture(t);
        return new PIXI.Texture(e)
    }, PIXI.Texture.addTextureToCache = function (t, e) {
        PIXI.TextureCache[e] = t
    }, PIXI.Texture.removeTextureFromCache = function (t) {
        var e = PIXI.TextureCache[t];
        return PIXI.TextureCache[t] = null, e
    }, PIXI.Texture.frameUpdates = [], PIXI.RenderTexture = function (t, e) {
        PIXI.EventTarget.call(this), this.width = t || 100, this.height = e || 100, this.indetityMatrix = PIXI.mat3.create(), this.frame = new PIXI.Rectangle(0, 0, this.width, this.height), PIXI.gl ? this.initWebGL() : this.initCanvas()
    }, PIXI.RenderTexture.constructor = PIXI.RenderTexture, PIXI.RenderTexture.prototype = Object.create(PIXI.Texture.prototype), PIXI.RenderTexture.prototype.initWebGL = function () {
        var t = PIXI.gl;
        this.glFramebuffer = t.createFramebuffer(), t.bindFramebuffer(t.FRAMEBUFFER, this.glFramebuffer), this.glFramebuffer.width = this.width, this.glFramebuffer.height = this.height, this.baseTexture = new PIXI.BaseTexture, this.baseTexture.width = this.width, this.baseTexture.height = this.height, this.baseTexture._glTexture = t.createTexture(), t.bindTexture(t.TEXTURE_2D, this.baseTexture._glTexture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.width, this.height, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), this.baseTexture.isRender = !0, t.bindFramebuffer(t.FRAMEBUFFER, this.glFramebuffer), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.baseTexture._glTexture, 0), this.projectionMatrix = PIXI.mat4.create(), this.projectionMatrix[5] = 2 / this.height, this.projectionMatrix[13] = -1, this.projectionMatrix[0] = 2 / this.width, this.projectionMatrix[12] = -1, this.render = this.renderWebGL
    }, PIXI.RenderTexture.prototype.initCanvas = function () {
        this.renderer = new PIXI.CanvasRenderer(this.width, this.height, null, 0), this.baseTexture = new PIXI.BaseTexture(this.renderer.view), this.frame = new PIXI.Rectangle(0, 0, this.width, this.height), this.render = this.renderCanvas
    }, PIXI.RenderTexture.prototype.renderWebGL = function (t, e) {
        var i = PIXI.gl;
        i.colorMask(!0, !0, !0, !0), i.viewport(0, 0, this.width, this.height), i.bindFramebuffer(i.FRAMEBUFFER, this.glFramebuffer), e && (i.clearColor(0, 0, 0, 0), i.clear(i.COLOR_BUFFER_BIT));
        var n = t.children;
        t.worldTransform = PIXI.mat3.create();
        for (var o = 0, r = n.length; r > o; o++) n[o].updateTransform();
        var s = t.__renderGroup;
        s ? t == s.root ? s.render(this.projectionMatrix) : s.renderSpecific(t, this.projectionMatrix) : (this.renderGroup || (this.renderGroup = new PIXI.WebGLRenderGroup(i)), this.renderGroup.setRenderable(t), this.renderGroup.render(this.projectionMatrix))
    }, PIXI.RenderTexture.prototype.renderCanvas = function (t, e) {
        var i = t.children;
        t.worldTransform = PIXI.mat3.create();
        for (var n = 0, o = i.length; o > n; n++) i[n].updateTransform();
        e && this.renderer.context.clearRect(0, 0, this.width, this.height), this.renderer.renderDisplayObject(t), PIXI.texturesToUpdate.push(this.baseTexture)
    }, PIXI.AssetLoader = function (t) {
        PIXI.EventTarget.call(this), this.assetURLs = t, this.crossorigin = !1, this.loadersByType = {
            jpg: PIXI.ImageLoader,
            jpeg: PIXI.ImageLoader,
            png: PIXI.ImageLoader,
            gif: PIXI.ImageLoader,
            json: PIXI.SpriteSheetLoader,
            xml: PIXI.BitmapFontLoader,
            fnt: PIXI.BitmapFontLoader
        }
    }, PIXI.AssetLoader.constructor = PIXI.AssetLoader, PIXI.AssetLoader.prototype.load = function () {
        var t = this;
        this.loadCount = this.assetURLs.length;
        for (var e = 0; this.assetURLs.length > e; e++) {
            var i = this.assetURLs[e],
                n = i.split(".")
                    .pop()
                    .toLowerCase(),
                o = this.loadersByType[n];
            if (!o) throw Error(n + " is an unsupported file type");
            var r = new o(i, this.crossorigin);
            r.addEventListener("loaded", function () {
                t.onAssetLoaded()
            }), r.load()
        }
    }, PIXI.AssetLoader.prototype.onAssetLoaded = function () {
        this.loadCount--, this.dispatchEvent({
            type: "onProgress",
            content: this
        }), this.onProgress && this.onProgress(), 0 == this.loadCount && (this.dispatchEvent({
            type: "onComplete",
            content: this
        }), this.onComplete && this.onComplete())
    }, PIXI.SpriteSheetLoader = function (t, e) {
        PIXI.EventTarget.call(this), this.url = t, this.baseUrl = t.replace(/[^\/]*$/, ""), this.texture = null, this.frames = {}, this.crossorigin = e
    }, PIXI.SpriteSheetLoader.constructor = PIXI.SpriteSheetLoader, PIXI.SpriteSheetLoader.prototype.load = function () {
        this.ajaxRequest = new AjaxRequest;
        var t = this;
        this.ajaxRequest.onreadystatechange = function () {
            t.onJSONLoaded()
        }, this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.overrideMimeType && this.ajaxRequest.overrideMimeType("application/json"), this.ajaxRequest.send(null)
    }, PIXI.SpriteSheetLoader.prototype.onJSONLoaded = function () {
        if (4 == this.ajaxRequest.readyState && (200 == this.ajaxRequest.status || -1 == window.location.href.indexOf("http"))) {
            var jsonData = eval("(" + this.ajaxRequest.responseText + ")"),
                textureUrl = this.baseUrl + jsonData.meta.image,
                image = new PIXI.ImageLoader(textureUrl, this.crossorigin);
            this.texture = image.texture.baseTexture;
            var scope = this;
            image.addEventListener("loaded", function () {
                scope.onLoaded()
            });
            var frameData = jsonData.frames;
            for (var i in frameData) {
                var rect = frameData[i].frame;
                rect && (PIXI.TextureCache[i] = new PIXI.Texture(this.texture, {
                    x: rect.x,
                    y: rect.y,
                    width: rect.w,
                    height: rect.h
                }), frameData[i].trimmed && (PIXI.TextureCache[i].realSize = frameData[i].spriteSourceSize, PIXI.TextureCache[i].trim.x = 0))
            }
            image.load()
        }
    }, PIXI.SpriteSheetLoader.prototype.onLoaded = function () {
        this.dispatchEvent({
            type: "loaded",
            content: this
        })
    }, PIXI.ImageLoader = function (t, e) {
        PIXI.EventTarget.call(this), this.texture = PIXI.Texture.fromImage(t, e)
    }, PIXI.ImageLoader.constructor = PIXI.ImageLoader, PIXI.ImageLoader.prototype.load = function () {
        if (this.texture.baseTexture.hasLoaded) this.onLoaded();
        else {
            var t = this;
            this.texture.baseTexture.addEventListener("loaded", function () {
                t.onLoaded()
            })
        }
    }, PIXI.ImageLoader.prototype.onLoaded = function () {
        this.dispatchEvent({
            type: "loaded",
            content: this
        })
    }, PIXI.BitmapFontLoader = function (t, e) {
        PIXI.EventTarget.call(this), this.url = t, this.baseUrl = t.replace(/[^\/]*$/, ""), this.texture = null, this.crossorigin = e
    }, PIXI.BitmapFontLoader.constructor = PIXI.BitmapFontLoader, PIXI.BitmapFontLoader.prototype.load = function () {
        this.ajaxRequest = new XMLHttpRequest;
        var t = this;
        this.ajaxRequest.onreadystatechange = function () {
            t.onXMLLoaded()
        }, this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.overrideMimeType && this.ajaxRequest.overrideMimeType("application/xml"), this.ajaxRequest.send(null)
    }, PIXI.BitmapFontLoader.prototype.onXMLLoaded = function () {
        if (4 == this.ajaxRequest.readyState && (200 == this.ajaxRequest.status || -1 == window.location.href.indexOf("http"))) {
            var t = this.baseUrl + this.ajaxRequest.responseXML.getElementsByTagName("page")[0].attributes.getNamedItem("file")
                .nodeValue,
                e = new PIXI.ImageLoader(t, this.crossorigin);
            this.texture = e.texture.baseTexture;
            var i = {}, n = this.ajaxRequest.responseXML.getElementsByTagName("info")[0],
                o = this.ajaxRequest.responseXML.getElementsByTagName("common")[0];
            i.font = n.attributes.getNamedItem("face")
                .nodeValue, i.size = parseInt(n.attributes.getNamedItem("size")
                    .nodeValue, 10), i.lineHeight = parseInt(o.attributes.getNamedItem("lineHeight")
                    .nodeValue, 10), i.chars = {};
            for (var r = this.ajaxRequest.responseXML.getElementsByTagName("char"), s = 0; r.length > s; s++) {
                var a = parseInt(r[s].attributes.getNamedItem("id")
                    .nodeValue, 10),
                    h = {
                        x: parseInt(r[s].attributes.getNamedItem("x")
                            .nodeValue, 10),
                        y: parseInt(r[s].attributes.getNamedItem("y")
                            .nodeValue, 10),
                        width: parseInt(r[s].attributes.getNamedItem("width")
                            .nodeValue, 10),
                        height: parseInt(r[s].attributes.getNamedItem("height")
                            .nodeValue, 10)
                    };
                PIXI.TextureCache[a] = new PIXI.Texture(this.texture, h), i.chars[a] = {
                    xOffset: parseInt(r[s].attributes.getNamedItem("xoffset")
                        .nodeValue, 10),
                    yOffset: parseInt(r[s].attributes.getNamedItem("yoffset")
                        .nodeValue, 10),
                    xAdvance: parseInt(r[s].attributes.getNamedItem("xadvance")
                        .nodeValue, 10),
                    kerning: {}
                }
            }
            var u = this.ajaxRequest.responseXML.getElementsByTagName("kerning");
            for (s = 0; u.length > s; s++) {
                var l = parseInt(u[s].attributes.getNamedItem("first")
                    .nodeValue, 10),
                    c = parseInt(u[s].attributes.getNamedItem("second")
                        .nodeValue, 10),
                    d = parseInt(u[s].attributes.getNamedItem("amount")
                        .nodeValue, 10);
                i.chars[c].kerning[l] = d
            }
            PIXI.BitmapText.fonts[i.font] = i;
            var p = this;
            e.addEventListener("loaded", function () {
                p.onLoaded()
            }), e.load()
        }
    }, PIXI.BitmapFontLoader.prototype.onLoaded = function () {
        this.dispatchEvent({
            type: "loaded",
            content: this
        })
    }, "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = PIXI), exports.PIXI = PIXI) : root.PIXI = PIXI
})
    .call(this), define("pixi", function (t) {
        return function () {
            var e;
            return e || t.PIXI
        }
    }(this));
var Absolute = Absolute || {};
Absolute.AsyncQueue = function () {
    this._initAsyncQueue()
}, Absolute.AsyncQueue.prototype._initAsyncQueue = function () {
    this.tasks = [], this.current = 0
}, Absolute.AsyncQueue.prototype.reset = function () {
    this.current = 0
}, Absolute.AsyncQueue.prototype.clear = function () {
    this.tasks = [], this.reset()
}, Absolute.AsyncQueue.prototype.pushTask = function (t) {
    this.tasks.push(t)
}, Absolute.AsyncQueue.prototype.pushTasks = function (t) {
    for (var e in t) this.tasks.push(t[e])
}, Absolute.AsyncQueue.prototype.run = function (t, e) {
    this.onProgress = t, this.onComplete = e;
    var i = this;
    if ("function" != typeof this.tasks[0]) throw "Error: task is a " + typeof this.tasks[0] + " not a function!";
    this.tasks[this.current](function (t) {
        i._updateProgress(t)
    }, function () {
        i._runNext()
    })
}, Absolute.AsyncQueue.prototype._runNext = function () {
    var t = this;
    if (++this.current < this.tasks.length) {
        if ("function" != typeof this.tasks[this.current]) throw "Error: task is a " + typeof this.tasks[0] + " not a function!";
        this.tasks[this.current](function (e) {
            t._updateProgress(e)
        }, function () {
            t._runNext()
        })
    } else this.onComplete()
}, Absolute.AsyncQueue.prototype._updateProgress = function (t) {
    var e = 0;
    this.tasks.length > 0 && (e = this.current / this.tasks.length + 1 / this.tasks.length * t), this.onProgress(e)
}, Absolute.AudioManager = {
    lastPlayed: 0,
    music: null,
    sounds: {},
    format: "mp3",
    sfxEnabled: !0,
    init: function (t) {
        audioTest = new Audio;
        var e = {
            m4a: !! (audioTest.canPlayType("audio/x-m4a;") || audioTest.canPlayType("audio/aac;"))
                .replace(/^no$/, ""),
            ogg: !! audioTest.canPlayType('audio/ogg; codecs="vorbis"')
                .replace(/^no$/, ""),
            mp3: !! audioTest.canPlayType("audio/mpeg;")
                .replace(/^no$/, "")
        };
        e.m4a ? this.format = "m4a" : e.ogg ? this.format = "ogg" : e.mp3 && (this.format = "mp3"), Absolute.Debug.log("Audio format " + this.format), t && "function" == typeof t && t()
    },
    setFormat: function (t) {
        this.format = t
    },
    loadSounds: function (t, e, i) {
        for (var n = this, o = t.length, r = 0, s = function () {
                ++r === o ? (n.setSfxEnabled(Absolute.GameConfig.getVal("sfxEnabled")), e(r / o), i()) : e(r / o)
            }; t.length > 0;) {
            var a = t.pop(),
                h = !! a.music;
            h ? this.createSound({
                id: a.id,
                url: a.url,
                volume: a.volume,
                autoLoad: a.autoLoad,
                onLoad: s,
                buffer: !0,
                loop: !0
            }) : this.createSound({
                id: a.id,
                url: a.url,
                volume: a.volume,
                autoLoad: a.autoLoad,
                onLoad: s,
                spritemap: a.spritemap
            })
        }
    },
    createSound: function (t) {
        var e, i, n = {};
        if (t.spritemap)
            for (e in t.spritemap) n[e] = [Math.round(1e3 * t.spritemap[e].start), 1e3 * Math.round(t.spritemap[e].end + .5)];
        if (i = new Howl({
            format: this.format,
            urls: ["sound/" + this.format + "/" + t.url + "." + this.format],
            volume: void 0 !== t.volume ? t.volume / 100 : 1,
            onload: t.onLoad,
            buffer: !1,
            loop: !! t.loop,
            sprite: n
        }), n)
            for (e in n) this.sounds[e] = i;
        this.sounds[t.id] = i
    },
    playSound: function (t, e, i) {
        if (this.sounds[t]) {
            var n = +new Date,
                o = n - this.lastPlayed;
            Absolute.Debug.log("AudioManager.playSound('" + t + "')  at delta " + o), this.lastPlayed = n;
            var r = -1 !== t.indexOf("music");
            r ? (this.sounds[t].play(), Absolute.GameConfig.getVal("musicEnabled") ? this.sounds[t].unmute() : this.sounds[t].mute()) : this.sfxEnabled && (Howler.usingWebAudio ? this.sounds[t].play(null, e, i / 1e3) : this.sounds[t].play(t, e, i / 1e3))
        }
    },
    stopSound: function (t) {
        this.sounds[t] && (this.isMusic(t) ? this.sounds[t].stop() : this.sounds[t].stop())
    },
    pauseSound: function (t) {
        this.sounds[t] && this.sounds[t].pause()
    },
    muteSound: function (t) {
        this.sounds[t] && this.sounds[t].mute()
    },
    unmuteSound: function (t) {
        this.sounds[t] && this.sounds[t].unmute()
    },
    setSfxEnabled: function (t) {
        if (this.sfxEnabled = t, Absolute.GameConfig.setVal("sfxEnabled", t), Howler.usingWebAudio) {
            var e;
            if (t)
                for (e in this.sounds) this.isMusic(e) || this.unmuteSound(e);
            else
                for (e in this.sounds) this.isMusic(e) || this.muteSound(e)
        } else t ? Howler.unmute() : Howler.mute()
    },
    isSfxEnabled: function () {
        return this.sfxEnabled
    },
    muteAll: function () {
        Howler.mute()
    },
    unmuteAll: function () {
        Howler.unmute()
    },
    usingWebAudio: function () {
        return Howler.usingWebAudio
    },
    isMusic: function (t) {
        return -1 !== t.indexOf("music")
    }
}, Absolute.Button = function (t, e, i, n) {
    this._initButton(t, e, i, n)
}, Absolute.Button.constructor = Absolute.Button, Absolute.Button.prototype = Object.create(PIXI.Sprite.prototype), Absolute.Button.prototype._initButton = function (t, e, i, n) {
    if (this.replaceOnHover = !! n, !this.replaceOnHover) {
        var o = new PIXI.Sprite(t);
        o.addChild(new PIXI.Sprite(e));
        var r = new Absolute.Snapshot(o);
        e = r.getSnapshot(), this.replaceOnHover = !0
    }
    PIXI.Sprite.call(this, t), this.active = !0, this.action = i, this.images = {}, this.defaultImage = t, this.hoverImage = e, this.buttonMode = !0, this.setInteractive(!0);
    var s = this;
    this.mouseover = function () {
        s.setTexture(s.hoverImage)
    }, this.mouseout = function () {
        s.setTexture(s.defaultImage)
    }, Modernizr.touch ? (this.touchstart = function () {
        s.setTexture(s.defaultImage), s.doAction()
    }, this.tap = function () {}) : this.click = function () {
        s.setTexture(s.defaultImage), s.doAction()
    }
}, Absolute.Button.prototype.doAction = function () {
    Absolute.AudioManager.playSound("button_click"), this.action && this.action()
}, Absolute.Button.prototype.isActive = function () {
    return this.active
}, Absolute.Button.prototype.setActive = function (t) {
    this.active = t, this.alpha = t ? 1 : .8, this.setInteractive(t)
}, Absolute.Button.prototype.getWidth = function () {
    return this.defaultImage.width
}, Absolute.Button.prototype.getHeight = function () {
    return this.defaultImage.height
}, Absolute.Coords = {
    x: function (t) {
        return t * Absolute.Platform.getResScale()
    },
    y: function (t) {
        return t * Absolute.Platform.getResScale()
    },
    offsetX: function (t, e) {
        return e.position.x + t
    },
    offsetY: function (t, e) {
        return e.position.y + t
    },
    centerX: function (t, e) {
        return (e.width - t.width) / 2
    },
    centerY: function (t, e) {
        return (e.height - t.height) / 2
    }
}, Absolute.Debug = {
    enabled: !1,
    log: function (t) {
        this.enabled && console.log(t)
    }
}, Absolute.DigitLabel = function (t, e) {
    this.initDigitLabel(t, e)
}, Absolute.DigitLabel.constructor = Absolute.DigitLabel, Absolute.DigitLabel.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), Absolute.DigitLabel.prototype.initDigitLabel = function (t, e) {
    PIXI.DisplayObjectContainer.call(this), e = e || 1, this.text = "", this.numDigits = t || 8, this.numCommas = Math.ceil(this.numDigits / 3 - 1), this.numSprites = this.numDigits + this.numCommas, this.sprites = [];
    for (var i = 0; this.numSprites > i; ++i) {
        var n = new Absolute.DigitSprite("number_large");
        n.scale.x = n.scale.y = e, this.sprites.push(n), this.addChild(n)
    }
    this.layout()
}, Absolute.DigitLabel.prototype.getText = function () {
    return this.text
}, Absolute.DigitLabel.prototype.setText = function (t) {
    this.text = t, this.layout()
}, Absolute.DigitLabel.prototype.layout = function () {
    for (var t = 0, e = 0; this.sprites.length > e; e++) this.sprites[e].visible = !1;
    if (this.text.length > 0)
        for (var i = 0, n = this.text.length; n > i; ++i) this.sprites[i].visible = !0, this.sprites[i].setDigit(this.text[i]), this.sprites[i].position.x = t, t += this.sprites[i].getDigitWidth();
    this.width = t, this.height = this.sprites[0].height
}, Absolute.DigitSprite = function (t) {
    this.initDigitSprite(t)
}, Absolute.DigitSprite.constructor = Absolute.DigitSprite, Absolute.DigitSprite.prototype = Object.create(PIXI.Sprite.prototype), Absolute.DigitSprite.prototype.initDigitSprite = function (t) {
    var e;
    for (this.textures = [], e = 0; 10 > e; e += 1) this.textures.push(PIXI.Texture.fromFrame(t + "_0" + e + ".png"));
    this.textures.push(PIXI.Texture.fromFrame(t + "_colon.png")), this.textures.push(PIXI.Texture.fromFrame(t + "_comma.png")), this.index = 0, PIXI.Sprite.call(this, this.textures[0])
}, Absolute.DigitSprite.prototype.setDigit = function (t) {
    var e = parseInt(t);
    this.index = e >= 0 && 10 > e ? e : ":" === t ? 10 : "," === t ? 11 : 0, this.setTexture(this.textures[this.index])
}, Absolute.DigitSprite.prototype.getDigitWidth = function () {
    return this.width
}, Absolute.EventBus = {
    events: {},
    addEventListener: function (t, e) {
        void 0 === this.events[t] && (this.events[t] = []), this.events[t].push(e)
    },
    removeEventListener: function (t, e) {
        var i = this.events[t];
        if (i)
            for (var n = 0, o = i.length; o > n; ++n)
                if (e === i[n]) return i.splice(n, 1), void 0
    },
    dispatchEvent: function (t) {
        var e = this.events[t];
        if (e)
            for (var i in e) {
                var n = e[i];
                "function" == typeof n && n(t)
            }
    }
}, Absolute.Game = function (t, e) {
    this._initGame(t, e)
}, Absolute.Game.prototype._initGame = function (t, e) {
    Absolute.StorageManager.prefix = t + "_", Absolute.GameConfig.load(e)
}, Absolute.Game.prototype.start = function () {}, Absolute.GameConfig = {
    defaults: {},
    options: {},
    reset: function () {
        this.options = this.defaults, this.save()
    },
    load: function (t) {
        if (this.defaults = t, this.options = Absolute.StorageManager.fetch("options") || this.defaults, !this.options.version || this.options.version < this.defaults.version)
            for (var e in this.defaults) this.defaults.hasOwnProperty(e) && !this.options.hasOwnProperty(e) && (this.options[e] = this.defaults[e])
    },
    save: function () {
        Absolute.StorageManager.store("options", this.options)
    },
    setVal: function (t, e) {
        this.options[t] = e, this.save()
    },
    getVal: function (t) {
        return this.options[t]
    }
}, Absolute.GameUI = function (t, e, i) {
    this._initGameUI(t, e, i)
}, Absolute.GameUI.prototype._initGameUI = function (t, e, i) {
    this.width = e, this.height = i, this.container = document.getElementById(t), this.stage = new PIXI.Stage(0, !0), this.interactionManager = new PIXI.InteractionManager(this.stage), this.interactionManager.mouseoverEnabled = !1, this.renderer = new PIXI.CanvasRenderer(e, i), this.offScreenRenderer = new PIXI.CanvasRenderer(e, i), this.container.appendChild(this.renderer.view), window.addEventListener("resize", this.resize.bind(this)), this.resize()
}, Absolute.GameUI.prototype.resize = function () {
    Absolute.ScreenMetrics.refresh(), Absolute.Platform.resClass = "";
    var t = document.documentElement.clientWidth,
        e = document.documentElement.clientHeight,
        i = t,
        n = e,
        o = t / e;
    o > .9 ? i = .9 * e : .7 > o && (n = t / .7), 
    this.renderer.view.style.width = i + "px", 
    this.renderer.view.style.height = n + "px", 
    this.renderer.view.style.marginLeft = t > i ? (t - i) / 2 + "px" : "0", 
    this.renderer.view.style.marginTop = e > n ? (e - n) / 2 + "px" : "0", MBP.hideUrlBar()
}, Absolute.GameUI.prototype.loadSound = function (t, e, i) {
    Absolute.AudioManager.init(function () {
        Absolute.AudioManager.loadSounds(t, e, i)
    })
}, Absolute.GameUI.prototype.loadArt = function (t, e, i, n) {
    for (var o = t.length, r = [], s = 0; o > s; ++s) r.push("art/" + Absolute.Platform.getResClass() + "/" + t[s]);
    this.assetLoader = new PIXI.AssetLoader(r), 
    this.assetLoader.addEventListener("onComplete", function () {
        n()
    }), 
    this.assetLoader.addEventListener("onProgress", function (t) {
        i(1 - t.content.loadCount / o)
    }), 
    this.assetLoader.load()
}, Absolute.GameUI.prototype.render = function () {
    this.renderer.render(this.stage)
}, Absolute.GameUI.prototype.renderOffScreen = function () {
    this.offScreenRenderer.render(this.stage)
}, Absolute.GameUI.prototype.animate = function () {
    var t = this,
        e = function () {
            requestAnimFrame(e), TWEEN.update(), t.renderer.render(t.stage)
        };
    requestAnimFrame(e)
}, Absolute.MusicManager = {
    currentTrack: null,
    isMuted: function () {
        return !Absolute.GameConfig.getVal("musicEnabled")
    },
    playMusic: function (t) {
        t !== this.currentTrack && (this.currentTrack && Absolute.AudioManager.stopSound(this.currentTrack), this.currentTrack = t, this.isMuted() ? Absolute.AudioManager.muteSound(this.currentTrack) : Absolute.AudioManager.unmuteSound(this.currentTrack), Absolute.AudioManager.playSound(this.currentTrack, function () {
            this.isMuted() ? Absolute.AudioManager.muteSound(this.currentTrack) : Absolute.AudioManager.unmuteSound(this.currentTrack)
        }.bind(this)))
    },
    stopMusic: function () {
        Absolute.AudioManager.stopSound(this.currentTrack), this.currentTrack = null
    },
    setMuted: function (t) {
        Absolute.GameConfig.setVal("musicEnabled", !t), this.currentTrack && (this.isMuted() ? Absolute.AudioManager.muteSound(this.currentTrack) : Absolute.AudioManager.unmuteSound(this.currentTrack))
    }
}, Absolute.Platform = {
    maxWidth: window.innerWidth,
    maxHeight: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio || 1,
    resClass: "",
    resScale: 0,
    getResScale: function () {
        return Absolute.ScreenMetrics.getResScale()
    },
    getResClass: function () {
        return "" !== this.resClass ? this.resClass : (this.resClass = Absolute.ScreenMetrics.getResClass(), this.resClass)
    },
    getClickAction: function () {
        return Modernizr.touch ? "touchstart" : "click"
    },
    isCrapAudio: function () {
        return navigator.userAgent.indexOf("Android") >= 0 ? !0 : navigator.userAgent.indexOf("Silk") >= 0 ? !0 : navigator.userAgent.match(/OS 5(_\d)+ like Mac OS X/i) ? !0 : navigator.userAgent.match(/OS 4(_\d)+ like Mac OS X/i) ? !0 : !1
    },
    isCrapGraphics: function () {
        return navigator.userAgent.indexOf("Android") >= 0 || navigator.userAgent.indexOf("Silk") >= 0 ? !0 : !1
    },
    _isiPhone: navigator.userAgent.match(/iPhone/i),
    _isiPod: navigator.userAgent.match(/iPod/i),
    _isiPad: navigator.userAgent.match(/iPad/i),
    _isAndroid: function () {
        return navigator.userAgent.indexOf("Android") >= 0 || navigator.userAgent.indexOf("Silk") >= 0
    },
    _isChrome: function () {
        return navigator.userAgent.indexOf("Android") >= 0 && navigator.userAgent.indexOf("CrMo") >= 0
    }
}, Absolute.ProgressBar = function (t, e) {
    this._initProgressBar(t, e)
}, Absolute.ProgressBar.constructor = Absolute.ProgressBar, Absolute.ProgressBar.prototype = Object.create(PIXI.Sprite.prototype), Absolute.ProgressBar.prototype._initProgressBar = function (t, e) {
    PIXI.Sprite.call(this, t), this.fillSprite = new PIXI.Sprite(e);
    var i = this.fillSprite.texture.frame;
    i.width = 1, this.fillSprite.texture.setFrame(i), this.addChild(this.fillSprite)
}, Absolute.ProgressBar.prototype.setProgress = function (t) {
    0 > t ? t = 0 : t > 1 && (t = 1);
    var e = this.fillSprite.texture.frame;
    e.width = this.width * t, 1 >= e.width && (e.width = 1), this.fillSprite.texture.setFrame(e)
}, Absolute.Screen = function () {
    this._initScreen()
}, Absolute.Screen.constructor = Absolute.Screen, Absolute.Screen.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), Absolute.Screen.prototype._initScreen = function () {
    PIXI.DisplayObjectContainer.call(this)
}, Absolute.Screen.prototype.addButton = function (t, e, i, n, o) {
    var r, s = !! o,
        a = PIXI.Texture.fromFrame(t + "_1.png");
    r = s ? PIXI.Texture.fromFrame("button_small_overlay.png") : PIXI.Texture.fromFrame("button_overlay.png");
    var h = new Absolute.Button(a, r, function () {
        Absolute.Debug.log(t + " pressed!"), n()
    });
    return h.position.x = e, h.position.y = i, this.addChild(h), h
}, Absolute.Screen.prototype.addToggleButton = function (t, e, i, n, o) {
    var r = new Absolute.ToggleButton(t, function () {
        Absolute.Debug.log(t + " pressed!"), n()
    }, o);
    return r.position.x = e, r.position.y = i, this.addChild(r), r
}, Absolute.Screen.prototype.onShow = function () {}, Absolute.Screen.prototype.onHide = function () {}, Absolute.ScreenMetrics = {
    kDefaultWidth: 1536,
    kDefaultHeight: 2008,
    refresh: function () {
        this.devicePixelRatio = window.devicePixelRatio || 1, this.screenWidth = screen.width, this.screenHeight = screen.height, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.outerWidth = window.outerWidth, this.outerHeight = window.outerHeight
    },
    isPortrait: function () {
        return this.innerWidth < this.innerHeight ? !0 : !1
    },
    getWidth: function () {
        var t = document.documentElement.clientWidth,
            e = document.documentElement.clientHeight;
        return this.isPortrait() ? t : e > t ? t : 1280 === t ? 800 : Absolute.Platform._isAndroid() ? Math.max(screen.height, e) : Math.max(screen.width, e)
    },
    getHeight: function () {
        var t;
        return t = this.isPortrait() ? this.innerHeight : this.screenWidth < this.screenHeight ? this.screenHeight - (this.screenWidth - this.innerHeight) : this.screenWidth - (this.screenHeight - this.innerHeight), navigator.userAgent.match(/iPhone/i) && (t -= 16), t
    },
    getScaledViewportWidth: function () {
        return this.getWidth() / this.getViewportScale()
    },
    getScaledViewportHeight: function () {
        return this.getHeight() / this.getViewportScale()
    },
    getScaledContentWidth: function () {
        return this.getContentWidth() * this.getViewportScale()
    },
    getScaledContentHeight: function () {
        return this.getContentHeight() * this.getViewportScale()
    },
    getContentWidth: function () {
        return this.kDefaultWidth * this.getResScale() / this.devicePixelRatio
    },
    getContentHeight: function () {
        return this.kDefaultHeight * this.getResScale() / this.devicePixelRatio
    },
    getViewportScale: function () {
        var t = this.getWidth() / this.getContentWidth(),
            e = this.getHeight() / this.getContentHeight();
        return Math.min(t, e)
    },
    getResClass: function () {
        var t = this.getWidth() * this.devicePixelRatio,
            e = this.kDefaultWidth - 10;
        return 1080 === t ? "r1080" : 640 === t ? "r640" : t >= e ? "r4_5" : t >= .75 * e ? "r4" : t >= .5 * e ? "r3" : t >= .4 * e ? "r2_5" : t >= .3 * e ? "r2" : "r1"
    },
    getResScale: function () {
        switch (this.getResClass()) {
            /*case "r4":
                alert('r4')
                return .75;
            case "r2":
                alert('r2')
                return .3;
            case "r2_5":
                alert('r2_5')
                return .4;
            case "r1080": //ipad retina
                alert('r1080')
                return .703125;                        
             */                
            case "r1": //iphone old
                return .2;
            case "r3": //ipad 1
                return .5;
            case "r4_5": //ipad retina
                return 1;
            case "r640": //iphone 5
                return .416667;
            default:
                return 1
        }
    },
    getScaleX: function () {
        return this.getWidth() * this.devicePixelRatio / (this.kDefaultWidth * this.getResScale())
    },
    getScaleY: function () {
        return this.getHeight() * this.devicePixelRatio / (this.kDefaultHeight * this.getResScale())
    },
    log: function () {
        Absolute.Debug.log("devicePixelRatio " + this.devicePixelRatio), Absolute.Debug.log("screenWidth " + this.screenWidth), Absolute.Debug.log("screenHeight " + this.screenHeight), Absolute.Debug.log("innerWidth " + this.innerWidth), Absolute.Debug.log("innerHeight " + this.innerHeight), Absolute.Debug.log("outerWidth " + this.outerWidth), Absolute.Debug.log("outerHeight " + this.outerHeight), Absolute.Debug.log("isPortrait() " + this.isPortrait()), Absolute.Debug.log("getWidth() " + this.getWidth()), Absolute.Debug.log("getHeight() " + this.getHeight()), Absolute.Debug.log("getResClass() " + this.getResClass()), Absolute.Debug.log("getResScale() " + this.getResScale()), Absolute.Debug.log("getContentWidth() " + this.getContentWidth()), Absolute.Debug.log("getContentHeight() " + this.getContentHeight()), Absolute.Debug.log("getViewportScale() " + this.getViewportScale()), Absolute.Debug.log("getScaledContentWidth " + this.getScaledContentWidth()), Absolute.Debug.log("getScaledContentHeight " + this.getScaledContentHeight()), Absolute.Debug.log("getScaledViewportWidth " + this.getScaledViewportWidth()), Absolute.Debug.log("getScaledViewportHeight " + this.getScaledViewportHeight())
    },
    getScreenParams: function () {
        return "devicePixelRatio=" + this.devicePixelRatio + "&" + "screen.width=" + screen.width + "&" + "screen.height=" + screen.height + "&" + "window.innerWidth=" + window.innerWidth + "&" + "window.innerHeight=" + window.innerHeight + "&" + "window.outerWidth=" + window.outerWidth + "&" + "window.outerHeight=" + window.outerHeight + "&" + "document.documentElement.clientWidth=" + document.documentElement.clientWidth + "&" + "document.documentElement.clientHeight=" + document.documentElement.clientHeight + "&" + "resClass=" + this.getResClass() + "&" + "resScale=" + this.getResScale()
    }
}, Absolute.Snapshot = function (t) {
    this.initSnapshot(t)
}, Absolute.Snapshot.constructor = Absolute.Snapshot, Absolute.Snapshot.prototype.initSnapshot = function (t) {
    var e = new PIXI.Stage;
    this.renderer = new PIXI.CanvasRenderer(t.width, t.height), e.addChild(t), this.renderer.render(e)
}, Absolute.Snapshot.prototype.getSnapshot = function () {
    return PIXI.Texture.fromCanvas(this.renderer.view)
}, Absolute.StorageManager = {
    prefix: null,
    store: function (t, e) {
        if (!this.prefix) throw "Error: you must set StorageManager.prefix for this game!";
        try {
            localStorage[this.prefix + t] = JSON.stringify(e)
        } catch (i) {
            Absolute.Debug.log("error creating local storage " + i)
        }
    },
    fetch: function (t) {
        if (!this.prefix) throw "Error: you must set StorageManager.prefix for this game!";
        try {
            var e = localStorage[this.prefix + t];
            if (e) return JSON.parse(e)
        } catch (i) {
            Absolute.Debug.log("error accessing local storage " + i)
        }
        return null
    }
}, Absolute.TextUtils = {
    _thousandsSep: ",",
    formatInt: function (t) {
        return t > 999 ? this.formatInt(Math.floor(t / 1e3)) + this._thousandsSep + this.zeroPad(t % 1e3) : t + ""
    },
    zeroPad: function (t) {
        var e = "";
        return 100 > t && (e += "0"), 10 > t && (e += "0"), e += t
    }
}, Absolute.ToggleButton = function (t, e, i) {
    this.initToggleButton(t, e, i)
}, Absolute.ToggleButton.constructor = Absolute.ToggleButton, Absolute.ToggleButton.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), Absolute.ToggleButton.prototype.initToggleButton = function (t, e, i) {
    this.enabled = !! i, this.action = e, PIXI.DisplayObjectContainer.call(this), this.enabledButton = new Absolute.Button(PIXI.Texture.fromFrame(t + "_1.png"), PIXI.Texture.fromFrame("button_overlay.png"), this.onAction.bind(this)), this.disabledButton = new Absolute.Button(PIXI.Texture.fromFrame(t + "OFF_1.png"), PIXI.Texture.fromFrame("button_overlay.png"), this.onAction.bind(this)), this.enabled ? this.addChild(this.enabledButton) : this.addChild(this.disabledButton)
}, Absolute.ToggleButton.prototype.onAction = function () {
    this.setEnabled(!this.enabled), this.action && this.action()
}, Absolute.ToggleButton.prototype.setEnabled = function (t) {
    t !== this.enabled && (this.enabled = t, this.enabled ? (this.removeChild(this.disabledButton), this.addChild(this.enabledButton)) : (this.addChild(this.enabledButton), this.addChild(this.disabledButton)))
}, Absolute.TweenUtils = {
    fadeIn: function (t, e, i) {
        this._doTween(t, e, i, Absolute.TweenUtils._fadeIn)
    },
    _fadeIn: function (t, e, i) {
        new TWEEN.Tween({
            alpha: t.alpha
        })
            .to({
                alpha: 1
            }, e.duration)
            .easing(TWEEN.Easing.Cubic.In)
            .onUpdate(function () {
                t.alpha = this.alpha
            })
            .onComplete(function () {
                i()
            })
            .start()
    },
    fadeOut: function (t, e, i) {
        this._doTween(t, e, i, Absolute.TweenUtils._fadeOut)
    },
    _fadeOut: function (t, e, i) {
        new TWEEN.Tween({
            alpha: t.alpha
        })
            .to({
                alpha: 0
            }, e.duration)
            .easing(TWEEN.Easing.Cubic.In)
            .onUpdate(function () {
                t.alpha = this.alpha
            })
            .onComplete(function () {
                i()
            })
            .start()
    },
    bounceIn: function (t, e, i) {
        this._doTween(t, e, i, Absolute.TweenUtils._bounceIn)
    },
    _bounceIn: function (t, e, i) {
        new TWEEN.Tween({
            scale: t.scale.x
        })
            .to({
                scale: 1
            }, e.duration)
            .easing(TWEEN.Easing.Elastic.Out)
            .onUpdate(function () {
                t.scale.x = t.scale.y = this.scale
            })
            .onComplete(function () {
                i()
            })
            .start()
    },
    _doTween: function (t, e, i, n) {
        var o, r, s = 0,
            a = function () {
                s += 1, s === r && i && "function" == typeof i && i()
            };
        if (t instanceof Array)
            for (r = t.length, o = 0; r > o; o += 1) n(t[o], e, a);
        else n(t, e, function () {
            i && "function" == typeof i && i()
        })
    }
}, define("absolute", ["pixi"], function (t) {
    return function () {
        var e;
        return e || t.Absolute
    }
}(this)), define("version", [], function () {
    var t = function () {
        this.version = "1"
    };
    return t
}), define("sound/soundassets", [], function () {
    var t = [{
        id: "ready",
        url: "dpl_ready",
        volume: 100
    }, {
        id: "go",
        url: "dpl_go",
        volume: 100
    }, {
        id: "tile_select",
        url: "dpl_tile_select",
        volume: 75
    }, {
        id: "single_tile",
        url: "dpl_single_tile",
        volume: 100
    }, {
        id: "match_1",
        url: "dpl_match_1",
        volume: 100
    }, {
        id: "match_2",
        url: "dpl_match_2",
        volume: 96
    }, {
        id: "match_3",
        url: "dpl_match_3",
        volume: 92
    }, {
        id: "match_4",
        url: "dpl_match_4",
        volume: 88
    }, {
        id: "match_5",
        url: "dpl_match_5",
        volume: 84
    }, {
        id: "match_6",
        url: "dpl_match_6",
        volume: 80
    }, {
        id: "match_7",
        url: "dpl_match_7",
        volume: 76
    }, {
        id: "match_8",
        url: "dpl_match_8",
        volume: 80
    }, {
        id: "match_9",
        url: "dpl_match_9",
        volume: 88
    }, {
        id: "match_10",
        url: "dpl_match_10",
        volume: 92
    }, {
        id: "match_11",
        url: "dpl_match_11",
        volume: 96
    }, {
        id: "match_12",
        url: "dpl_match_12",
        volume: 97
    }, {
        id: "match_13",
        url: "dpl_match_13",
        volume: 98
    }, {
        id: "match_14",
        url: "dpl_match_14",
        volume: 100
    }, {
        id: "load_tiles",
        url: "dpl_load_tiles",
        volume: 100
    }, {
        id: "hint",
        url: "dpl_hint",
        volume: 70
    }, {
        id: "shuffle",
        url: "dpl_shuffle",
        volume: 75
    }, {
        id: "tile_fall_1",
        url: "dpl_tile_fall_1",
        volume: 30
    }, {
        id: "tile_fall_2",
        url: "dpl_tile_fall_2",
        volume: 28
    }, {
        id: "tile_fall_3",
        url: "dpl_tile_fall_3",
        volume: 26
    }, {
        id: "tile_fall_4",
        url: "dpl_tile_fall_4",
        volume: 24
    }, {
        id: "tile_fall_5",
        url: "dpl_tile_fall_5",
        volume: 22
    }, {
        id: "tile_fall_6",
        url: "dpl_tile_fall_6",
        volume: 20
    }, {
        id: "tile_fall_7",
        url: "dpl_tile_fall_7",
        volume: 18
    }, {
        id: "tile_fall_8",
        url: "dpl_tile_fall_8",
        volume: 16
    }, {
        id: "tile_fall_9",
        url: "dpl_tile_fall_9",
        volume: 14
    }, {
        id: "tile_slide_1",
        url: "dpl_tile_slide_1",
        volume: 80
    }, {
        id: "tile_slide_2",
        url: "dpl_tile_slide_2",
        volume: 80
    }, {
        id: "tile_slide_2",
        url: "dpl_tile_slide_2",
        volume: 80
    }, {
        id: "tile_slide_3",
        url: "dpl_tile_slide_3",
        volume: 80
    }, {
        id: "tile_slide_4",
        url: "dpl_tile_slide_4",
        volume: 80
    }, {
        id: "tile_slide_5",
        url: "dpl_tile_slide_5",
        volume: 80
    }, {
        id: "tile_slide_6",
        url: "dpl_tile_slide_6",
        volume: 80
    }, {
        id: "tile_slide_7",
        url: "dpl_tile_slide_7",
        volume: 80
    }, {
        id: "win",
        url: "dpl_win",
        volume: 100
    }, {
        id: "button_click",
        url: "dpl_button_click",
        volume: 100
    }, {
        id: "power_hint",
        url: "dpl_power_hint",
        volume: 100
    }, {
        id: "power_shuffle",
        url: "dpl_power_shuffle",
        volume: 100
    }, {
        id: "power_time",
        url: "dpl_power_time",
        volume: 85
    }, {
        id: "run_out_of_time",
        url: "dpl_run_out_of_time",
        volume: 100
    }, {
        id: "times_up",
        url: "dpl_times_up",
        volume: 100
    }, {
        id: "last_match_sound",
        url: "dpl_last_match_sound",
        volume: 100
    }, {
        id: "game_bg_music",
        url: "dpl_music",
        volume: 40,
        music: !0
    }, {
        id: "menu_bg_music",
        url: "dpl_menu_music",
        volume: 60,
        music: !0
    }, {
        id: "music_blitz_a",
        url: "dpl_music_blitz_a",
        volume: 60,
        music: !0
    }, {
        id: "music_blitz_b",
        url: "dpl_music_blitz_b",
        volume: 60,
        music: !0
    }];
    return t
}), define("sound/audiosprites", [], function () {
    var t = {
        button_click: {
            start: 0,
            end: .06820861678004535,
            loop: !1
        },
        click_on_background: {
            start: 2,
            end: 2.1610884353741495,
            loop: !1
        },
        go: {
            start: 4,
            end: 5.275646258503402,
            loop: !1
        },
        hint: {
            start: 7,
            end: 8.647165532879818,
            loop: !1
        },
        intro_stinger: {
            start: 10,
            end: 12.088004535147393,
            loop: !1
        },
        last_match_sound: {
            start: 14,
            end: 16.04190476190476,
            loop: !1
        },
        match_1: {
            start: 18,
            end: 19.22920634920635,
            loop: !1
        },
        match_10: {
            start: 21,
            end: 22.22920634920635,
            loop: !1
        },
        match_11: {
            start: 24,
            end: 25.22920634920635,
            loop: !1
        },
        match_12: {
            start: 27,
            end: 28.22920634920635,
            loop: !1
        },
        match_13: {
            start: 30,
            end: 31.22920634920635,
            loop: !1
        },
        match_14: {
            start: 33,
            end: 34.22920634920635,
            loop: !1
        },
        match_2: {
            start: 36,
            end: 37.22920634920635,
            loop: !1
        },
        match_3: {
            start: 39,
            end: 40.22920634920635,
            loop: !1
        },
        match_4: {
            start: 42,
            end: 43.22920634920635,
            loop: !1
        },
        match_5: {
            start: 45,
            end: 46.22920634920635,
            loop: !1
        },
        match_6: {
            start: 48,
            end: 49.22920634920635,
            loop: !1
        },
        match_7: {
            start: 51,
            end: 52.22920634920635,
            loop: !1
        },
        match_8: {
            start: 54,
            end: 55.22920634920635,
            loop: !1
        },
        match_9: {
            start: 57,
            end: 58.22920634920635,
            loop: !1
        },
        mouseover: {
            start: 60,
            end: 60.25396825396825,
            loop: !1
        },
        power_hint: {
            start: 62,
            end: 63.22920634920635,
            loop: !1
        },
        power_shuffle: {
            start: 65,
            end: 66.20598639455783,
            loop: !1
        },
        power_time: {
            start: 68,
            end: 68.95056689342404,
            loop: !1
        },
        ready: {
            start: 70,
            end: 72.01868480725624,
            loop: !1
        },
        shuffle: {
            start: 86,
            end: 87.02022675736961,
            loop: !1
        },
        time_warning: {
            start: 89,
            end: 99.26176870748299,
            loop: !1
        },
        times_up: {
            start: 101,
            end: 104.52798185941043,
            loop: !1
        },
        win: {
            start: 106,
            end: 107.94902494331066,
            loop: !1
        }
    };
    return t
}), define("art/artassets", [], function () {
    var t = ["mainmenu.json", "howtoplay.json", "background.json", "text.json", "spritesheet1.json", "spritesheet2.json"];
    return t
}), define("mainmenu", ["absolute"], function (t) {
    var e = function (t, e) {
        this.game = e, this.ui = t, this._initMainMenu()
    };
    return e.prototype = Object.create(t.Screen.prototype), e.prototype._initMainMenu = function () {
        var e = this;
        t.Screen.call(this);
        var i = PIXI.Sprite.fromFrame("main_menu.png");
        this.addChild(i), this.logo = PIXI.Sprite.fromFrame("logo.png"), this.logo.position.x = (this.ui.width - this.logo.width) / 2, this.logo.position.y = .1 * this.ui.height, this.addChild(this.logo), this.playButton = new t.Button(PIXI.Texture.fromFrame("button_menu_play_1.png"), PIXI.Texture.fromFrame("button_overlay.png"), function () {
            t.Debug.log("Play pressed!"), t.MusicManager.playMusic("menu_bg_music"), e.game.selectLevel()
        }), this.playButton.position.x = (this.ui.width - this.playButton.width) / 2, this.playButton.position.y = .725 * this.ui.height, this.addChild(this.playButton), t.AudioManager.usingWebAudio() && (this.muteMusicButton = this.addToggleButton("button_options_music", .78 * this.ui.width, .92 * this.ui.height, function () {
            t.MusicManager.setMuted(!t.MusicManager.isMuted())
        }, !t.MusicManager.isMuted()), this.muteMusicButton.scale.x = this.muteMusicButton.scale.y = .5), this.muteSfxButton = this.addToggleButton("button_options_sfx", .88 * this.ui.width, .92 * this.ui.height, function () {
            t.AudioManager.setSfxEnabled(!t.AudioManager.isSfxEnabled())
        }, t.AudioManager.isSfxEnabled()), this.muteSfxButton.scale.x = this.muteSfxButton.scale.y = .5, this.zibboButton = new t.Button(PIXI.Texture.fromFrame("btn_zibbo_01.png"), PIXI.Texture.fromFrame("btn_zibbo_02.png"), function () {
            t.Debug.log("Zibbo pressed!"), window.top.location = "http://www.zibbo.com/"
        }), this.zibboButton.position.x = .02 * this.ui.width, this.zibboButton.position.y = .925 * this.ui.height, this.addChild(this.zibboButton);
        for (var n = 0; this.children.length > n; n += 1) this.getChildAt(n)
            .alpha = 0;
        this.logo.alpha = 1, this.firstShow = !0
    }, e.prototype.onShow = function () {
        if (t.Screen.prototype.onShow.call(this), t.AudioManager.usingWebAudio() && (this.muteMusicButton.visible = !0, this.muteMusicButton.setEnabled(!t.MusicManager.isMuted())), this.muteSfxButton.setEnabled(t.AudioManager.isSfxEnabled()), this.muteSfxButton.visible = !0, this.firstShow) {
            var e = this;
            this.firstShow = !1, t.AudioManager.usingWebAudio() && (this.muteMusicButton.visible = !1), this.muteSfxButton.visible = !1, new TWEEN.Tween({
                alpha: 0
            })
                .to({
                    alpha: 1
                }, 1e3)
                .easing(TWEEN.Easing.Sinusoidal.InOut)
                .onUpdate(function () {
                    for (var t = 0; e.children.length > t; t += 1) e.getChildAt(t)
                        .alpha = this.alpha;
                    e.logo.alpha = 1
                })
                .start()
        }
    }, e.prototype.onHide = function () {
        t.Screen.prototype.onHide.call(this)
    }, e
}), define("levelconfig", [], function () {
    var t = {
        comboThreshold: 2500,
        comboPoints: [0, 100, 250, 500, 750, 1e3, 1250, 1500, 2e3, 3e3, 4e3, 5e3, 7500, 1e4],
        pointsPerMatch: 2500,
        maxTimeBonus: 25e3,
        timePowerupSeconds: 10,
        maxPathTurns: 2,
        shimmerHintInterval: 1e4,
        levels: [{
            name: "1",
            timeGoal: 90,
            powerups: {
                time: 0,
                shuffle: 0,
                hint: 2
            },
            collapseMode: "none",
            tileTypes: [1, 7, 11, 12, 15, 17, 23, 25, 42],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0", "0 0 1 1 1 1 1 1 0 0", "0 0 1 1 1 1 1 1 0 0", "0 0 1 1 0 0 1 1 0 0", "0 0 1 1 0 0 1 1 0 0", "0 0 1 1 1 1 1 1 0 0", "0 0 1 1 1 1 1 1 0 0", "0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "2",
            timeGoal: 90,
            powerups: {
                time: 0,
                shuffle: 2,
                hint: 0
            },
            collapseMode: "none",
            tileTypes: [1, 7, 11, 12, 15, 17, 23, 25, 42],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0", "0 0 1 1 1 1 1 1 0 0", "0 0 1 1 1 1 1 1 0 0", "0 0 1 1 1 1 1 1 0 0", "0 0 1 1 1 1 1 1 0 0", "0 0 1 1 1 1 1 1 0 0", "0 0 1 1 1 1 1 1 0 0", "0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "3",
            timeGoal: 90,
            powerups: {
                time: 0,
                shuffle: 0,
                hint: 1
            },
            collapseMode: "down",
            tileTypes: [5, 6, 7, 8, 9, 10, 11, 12, 35, 39, 43, 40],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 0 0 0 0 0 0 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "4",
            timeGoal: 90,
            numHints: 6,
            powerups: {
                time: 0,
                shuffle: 0,
                hint: 1
            },
            collapseMode: "up",
            tileTypes: [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 0 0 0 0 0 0 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "5",
            timeGoal: 90,
            powerups: {
                time: 0,
                shuffle: 1,
                hint: 0
            },
            collapseMode: "right",
            tileTypes: [1, 6, 9, 15, 17, 18, 22, 25, 31, 32, 35, 38, 41, 42],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 0 0 0", "0 1 1 0 1 1 1 0 0 0", "0 1 1 0 0 1 1 0 0 0", "0 0 0 0 0 0 1 0 0 0", "0 0 0 0 0 0 1 0 0 0", "0 1 1 0 0 1 1 0 0 0", "0 1 1 0 1 1 1 0 0 0", "0 1 1 1 1 1 1 0 0 0", "0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "6",
            timeGoal: 90,
            powerups: {
                time: 0,
                shuffle: 1,
                hint: 0
            },
            collapseMode: "left",
            tileTypes: [2, 3, 4, 10, 11, 13, 20, 28, 29, 33, 37, 39, 40],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0", "0 0 0 1 1 1 1 1 1 0", "0 0 0 1 1 1 0 1 1 0", "0 0 0 1 1 0 0 1 1 0", "0 0 0 1 0 0 0 0 0 0", "0 0 0 1 0 0 0 0 0 0", "0 0 0 1 1 0 0 1 1 0", "0 0 0 1 1 1 0 1 1 0", "0 0 0 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "7",
            timeGoal: 90,
            powerups: {
                time: 3,
                shuffle: 0,
                hint: 0
            },
            collapseMode: "vert_imp",
            tileTypes: [1, 2, 3, 4, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 33, 36, 37, 38],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 0 0 1 1 0 0 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 0 1 0 0 1 0 1 0", "0 1 0 1 0 0 1 0 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 0 0 1 1 0 0 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "8",
            timeGoal: 90,
            powerups: {
                time: 3,
                shuffle: 0,
                hint: 0
            },
            collapseMode: "horz_imp",
            tileTypes: [1, 2, 3, 4, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 33, 36, 37, 38],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 0 1 0 0 1 0 1 0", "0 1 0 1 0 0 1 0 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "9",
            timeGoal: 120,
            powerups: {
                time: 1,
                shuffle: 1,
                hint: 0
            },
            collapseMode: "vert_exp",
            tileTypes: [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 29, 31, 33, 35, 36, 37, 38, 41, 43],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 0 1 1 1 1 1 1 0 0", "0 0 0 0 1 1 0 0 0 0", "0 0 1 1 1 1 1 1 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 1 1 1 1 1 1 0 0", "0 0 0 0 1 1 0 0 0 0", "0 0 1 1 1 1 1 1 0 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "10",
            timeGoal: 120,
            powerups: {
                time: 1,
                shuffle: 1,
                hint: 0
            },
            collapseMode: "horz_exp",
            tileTypes: [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 29, 31, 33, 35, 36, 37, 38, 41, 43],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 0 0 0 1 1 0 0 0 0", "0 1 0 1 1 1 1 0 1 0", "0 1 0 1 1 1 1 0 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 0 1 1 1 1 0 1 0", "0 1 0 1 1 1 1 0 1 0", "0 0 0 0 1 1 0 0 0 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "11",
            timeGoal: 60,
            music: "music_blitz_a",
            powerups: {
                time: 3,
                shuffle: 0,
                hint: 0
            },
            collapseMode: "none",
            tileTypes: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 22, 23, 24, 25, 27, 29, 31, 33, 35, 36, 37, 39, 40, 41, 42, 43],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 1 1 1 1 0 0 0", "0 0 0 1 1 1 1 0 0 0", "0 0 0 1 1 1 1 0 0 0", "0 0 0 1 1 1 1 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "12",
            timeGoal: 60,
            music: "music_blitz_b",
            powerups: {
                time: 3,
                shuffle: 0,
                hint: 0
            },
            collapseMode: "none",
            tileTypes: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 22, 23, 24, 25, 27, 29, 31, 33, 35, 36, 37, 39, 40, 41, 42, 43],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 0 0 0 0 1 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 1 1 1 1 0 0 0", "0 0 0 1 1 1 1 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 1 0 0 0 0 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "13",
            timeGoal: 240,
            powerups: {
                time: 0,
                shuffle: 2,
                hint: 3
            },
            collapseMode: "none",
            tileTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 39, 40, 41, 42, 43, 44],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "14",
            timeGoal: 20,
            music: "music_blitz_a",
            powerups: {
                time: 10,
                shuffle: 0,
                hint: 8
            },
            collapseMode: "down",
            tileTypes: [44, 45, 46, 47, 48],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 0 1 1 1 1 0 1 0", "0 1 0 1 1 1 1 0 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "15",
            timeGoal: 180,
            powerups: {
                time: 0,
                shuffle: 6,
                hint: 0
            },
            collapseMode: "vert_imp",
            tileTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 39, 40, 41, 42, 43, 44],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "16",
            timeGoal: 240,
            powerups: {
                time: 0,
                shuffle: 2,
                hint: 2
            },
            collapseMode: "up",
            tileTypes: [1, 2, 3, 4, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 33, 36, 37, 38, 2, 3, 4, 10, 11, 13, 20, 28, 29, 33, 37, 39, 44],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 0 1 1 1 1 1 1 0", "0 1 1 0 1 1 1 1 1 0", "0 1 1 1 0 1 1 1 1 0", "0 0 1 1 1 0 1 1 1 0", "0 1 0 1 1 1 0 1 1 0", "0 1 1 0 1 1 1 0 1 0", "0 1 1 1 0 1 1 1 0 0", "0 1 1 1 1 0 1 1 1 0", "0 1 1 1 1 1 0 1 1 0", "0 1 1 1 1 1 1 0 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "17",
            timeGoal: 120,
            powerups: {
                time: 1,
                shuffle: 0,
                hint: 1
            },
            collapseMode: "none",
            tileTypes: [1, 6, 9, 15, 17, 18, 22, 25, 31, 32, 35, 38, 41, 42],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 0 0 1 1 0 0 1 0", "0 1 0 0 1 1 0 0 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 0 1 1 1 1 0 1 0", "0 1 0 1 1 1 1 0 1 0", "0 1 0 0 0 0 0 0 1 0", "0 1 0 0 0 0 0 0 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "18",
            timeGoal: 90,
            powerups: {
                time: 3,
                shuffle: 2,
                hint: 0
            },
            collapseMode: "left",
            tileTypes: [13, 14, 15, 16, 30, 32, 42, 10, 12, 35, 35, 34, 34, 34, 34],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 0 1 0 1 1 1 0", "0 1 0 1 1 0 1 1 1 0", "0 0 1 1 1 0 1 1 1 0", "0 0 0 0 0 0 1 1 1 0", "0 1 1 1 1 0 1 1 1 0", "0 0 0 1 1 0 1 0 0 0", "0 1 1 0 0 0 0 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "19",
            timeGoal: 60,
            music: "music_blitz_a",
            powerups: {
                time: 1,
                shuffle: 1,
                hint: 0
            },
            collapseMode: "horz_imp",
            tileTypes: [33, 31, 33, 31, 5, 5, 5],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 0 0 1 0", "0 1 1 1 1 0 1 0 1 0", "0 1 0 0 0 0 1 1 1 0", "0 1 0 0 0 0 1 1 1 0", "0 1 0 1 1 0 1 1 1 0", "0 1 0 1 1 0 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "20",
            timeGoal: 240,
            powerups: {
                time: 0,
                shuffle: 0,
                hint: 0
            },
            collapseMode: "up",
            tileTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 0 0 0 1 1 0", "0 1 1 1 0 1 1 0 1 0", "0 1 1 1 1 1 1 0 1 0", "0 1 0 0 1 1 1 0 1 0", "0 1 0 0 1 1 1 0 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 0 1 1 1 0 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "21",
            timeGoal: 180,
            powerups: {
                time: 0,
                shuffle: 0,
                hint: 2
            },
            collapseMode: "none",
            tileTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 44, 45, 46, 47, 48, 44, 45, 46, 47, 48, 44, 45, 46, 47, 48, 44, 45, 46, 47, 48],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 0 0 0 0 0 0 1 0", "0 1 1 0 1 0 1 0 1 0", "0 1 1 1 1 1 1 0 1 0", "0 1 1 1 0 1 1 0 1 0", "0 1 1 0 1 1 1 0 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "22",
            timeGoal: 60,
            music: "music_blitz_b",
            powerups: {
                time: 3,
                shuffle: 0,
                hint: 0
            },
            collapseMode: "horz_imp",
            tileTypes: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 9, 17, 41, 34, 18, 19, 19, 19, 19, 19, 19, 19, 43, 12, 36, 22, 40, 39],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 0 1 0 0 1 0 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 0 1 1 1 1 0 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "23",
            timeGoal: 120,
            powerups: {
                time: 0,
                shuffle: 3,
                hint: 0
            },
            collapseMode: "down",
            tileTypes: [39, 5, 10, 11, 12, 13, 14, 15, 16, 30, 32, 34, 34, 34, 34, 35, 40, 42, 43, 2, 3, 4, 10, 11, 13, 20, 28, 29, 33, 37, 39, 44],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 0 1 1 1 1 1 0", "0 1 1 0 0 1 1 1 1 0", "0 1 1 0 0 0 1 1 1 0", "0 1 1 0 0 0 0 1 1 0", "0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "24",
            timeGoal: 60,
            music: "music_blitz_a",
            powerups: {
                time: 3,
                shuffle: 0,
                hint: 0
            },
            collapseMode: "vert_imp",
            tileTypes: [33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 31, 31, 31, 31, 1, 5, 29, 38, 1, 2, 3, 4, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 33, 36, 37, 31],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 1 1 0 0 0 0", "0 0 1 0 1 1 0 1 0 0", "0 1 0 0 1 1 0 0 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "25",
            timeGoal: 120,
            powerups: {
                time: 0,
                shuffle: 0,
                hint: 0
            },
            collapseMode: "right",
            tileTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 39, 40, 41, 42, 43, 44],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 0 0 1 1 0 0 1 0", "0 1 0 0 1 1 0 0 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 0 0 0 0 0 0 1 0", "0 1 0 0 0 0 0 0 1 0", "0 1 0 0 1 1 0 0 1 0", "0 1 0 0 1 1 0 0 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "26",
            timeGoal: 120,
            powerups: {
                time: 1,
                shuffle: 1,
                hint: 1
            },
            collapseMode: "up",
            tileTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 30, 40, 30, 40, 30, 40, 30, 40, 30, 40, 30, 40, 30, 40, 30, 40, 30, 40, 30, 40],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "27",
            timeGoal: 150,
            powerups: {
                time: 1,
                shuffle: 1,
                hint: 1
            },
            collapseMode: "none",
            tileTypes: [1, 2, 3, 4, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 33, 36, 37, 38],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 0 1 1 1 1 1 1 0 0", "0 1 0 1 1 1 1 0 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 0 1 1 1 1 0 1 0", "0 1 0 1 1 1 1 0 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 0 1 1 1 1 0 1 0", "0 0 1 1 1 1 1 1 0 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "28",
            timeGoal: 120,
            powerups: {
                time: 1,
                shuffle: 2,
                hint: 3
            },
            collapseMode: "vert_exp",
            tileTypes: [1, 3, 5, 5, 5, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 26, 26, 26, 27, 29, 31, 33, 35, 37, 39, 40, 41, 43, 43, 43, 43],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 0 1 0 1 1 0 1 0 0", "0 0 1 0 1 1 0 1 0 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "29",
            timeGoal: 60,
            music: "music_blitz_b",
            powerups: {
                time: 2,
                shuffle: 0,
                hint: 0
            },
            collapseMode: "up",
            tileTypes: [1, 2, 3, 4, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 33, 36, 37, 38, 30, 30, 40, 40, 34, 34, 13, 32, 14, 42],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "30",
            timeGoal: 120,
            powerups: {
                time: 1,
                shuffle: 1,
                hint: 1
            },
            collapseMode: "right",
            tileTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 38, 6, 7, 8, 44, 45, 46, 47, 48, 35, 43, 11, 10],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 0 1 0 1 1 1 1 0", "0 1 0 0 0 1 1 1 1 0", "0 1 1 1 1 0 0 0 1 0", "0 1 1 1 1 0 1 0 1 0", "0 1 1 1 1 0 0 0 1 0", "0 1 0 0 0 1 1 1 1 0", "0 1 0 1 0 1 1 1 1 0", "0 1 0 0 0 1 1 1 1 0", "0 1 1 1 1 0 0 0 1 0", "0 1 1 1 1 0 1 0 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "31",
            timeGoal: 120,
            powerups: {
                time: 0,
                shuffle: 1,
                hint: 1
            },
            collapseMode: "none",
            tileTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 39, 40, 41, 42, 43, 44],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 0 0 0 1 0 0 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 0 1 0 0 1 0 1 0", "0 1 0 1 0 0 1 0 1 0", "0 1 0 1 0 0 1 0 1 0", "0 1 0 1 0 0 1 0 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 0 0 1 0 0 0 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "32",
            timeGoal: 90,
            powerups: {
                time: 2,
                shuffle: 2,
                hint: 0
            },
            collapseMode: "left",
            tileTypes: [1, 6, 7, 9, 11, 15, 17, 18, 22, 25, 31, 32, 33, 34, 35, 38, 40, 41, 42, 45, 48],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 0 1 1 0 0 1 1 0 0", "0 1 0 1 1 1 1 0 1 0", "0 1 0 1 1 1 1 0 1 0", "0 1 0 1 0 0 1 0 1 0", "0 0 1 0 1 1 0 1 0 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "33",
            timeGoal: 20,
            powerups: {
                time: 4,
                shuffle: 0,
                hint: 0
            },
            collapseMode: "vert_imp",
            tileTypes: [34, 30, 13, 14, 16, 32, 35],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 0 0 0 0 0 0 1 0", "0 1 0 0 0 0 0 0 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "34",
            timeGoal: 120,
            powerups: {
                time: 0,
                shuffle: 0,
                hint: 2
            },
            collapseMode: "down",
            tileTypes: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 40, 41, 43],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 0 1 0 1 0 1 0 0", "0 1 1 1 1 1 1 1 1 0", "0 0 1 0 1 0 1 0 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 0 1 0 1 0 1 0 0", "0 1 1 1 1 1 1 1 1 0", "0 0 1 0 1 0 1 0 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 0 1 0 1 0 1 0 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "35",
            timeGoal: 120,
            powerups: {
                time: 0,
                shuffle: 0,
                hint: 2
            },
            collapseMode: "up",
            tileTypes: [2, 3, 4, 5, 10, 11, 13, 20, 21, 23, 26, 28, 29, 33, 34, 37, 38, 39, 42, 43, 44],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 0 0 1 0 0 1 0 0 0", "0 0 1 1 1 1 1 1 0 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 1 1 1 1 0 0 0", "0 0 1 1 1 1 1 1 0 0", "0 0 1 1 1 1 1 1 0 0", "0 0 0 1 1 1 1 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 0 1 1 1 1 1 1 0 0", "0 0 0 1 0 0 0 1 0 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "36",
            timeGoal: 120,
            powerups: {
                time: 1,
                shuffle: 1,
                hint: 1
            },
            collapseMode: "vert_imp",
            tileTypes: [2, 9, 21, 30, 32, 33, 34, 35, 13, 40, 48, 11, 43, 38, 16, 44, 45, 46, 47, 2, 4, 7, 9, 10, 11, 18, 29, 33, 35, 36, 37, 38, 41, 43, 44],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 0 0 0 0 0 0 1 0", "0 1 0 1 0 0 1 0 1 0", "0 1 0 0 0 0 0 0 1 0", "0 1 0 0 1 1 0 0 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 1 0 1 0 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "37",
            timeGoal: 50,
            powerups: {
                time: 1,
                shuffle: 1,
                hint: 1
            },
            collapseMode: "none",
            tileTypes: [21, 22, 23, 24, 36, 37, 38, 2, 3, 4, 20, 28, 29, 33, 37, 39, 44],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 0 0 1 1 1 0", "0 0 1 1 0 0 1 1 0 0", "0 0 1 1 1 1 1 1 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 0 0 1 1 0 0 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 1 1 1 1 1 1 0 0", "0 1 0 1 1 1 1 0 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 0 0 0 0 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "38",
            timeGoal: 120,
            powerups: {
                time: 1,
                shuffle: 0,
                hint: 0
            },
            collapseMode: "horz_imp",
            tileTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 39, 40, 41, 42, 43, 44],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 0 1 1 1 1 1 1 0 0", "0 1 0 1 1 1 1 0 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 0 0 0 0 1 1 0", "0 1 0 1 1 1 1 0 1 0", "0 0 1 1 1 1 1 1 0 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "39",
            timeGoal: 180,
            powerups: {
                time: 0,
                shuffle: 0,
                hint: 0
            },
            collapseMode: "up",
            tileTypes: [1, 1, 1, 2, 4, 7, 9, 10, 11, 18, 29, 33, 35, 36, 37, 38, 41, 43, 44],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 0 0 1 1 0 0 1 0", "0 1 0 0 1 1 0 0 1 0", "0 1 0 0 0 0 0 0 1 0", "0 1 0 1 0 0 1 0 1 0", "0 1 0 0 0 0 0 0 1 0", "0 1 1 0 1 1 0 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "40",
            timeGoal: 300,
            powerups: {
                time: 1,
                shuffle: 0,
                hint: 0
            },
            collapseMode: "horz_imp",
            tileTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 39, 40, 41, 42, 43, 44],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 0 1 1 1 1 1 1 0", "0 1 0 0 0 0 0 0 0 0", "0 1 0 1 1 1 1 0 1 0", "0 1 0 1 1 1 1 0 1 0", "0 1 0 1 1 1 1 0 1 0", "0 1 0 1 1 1 1 0 1 0", "0 1 0 1 1 1 1 0 1 0", "0 1 0 1 1 1 1 0 1 0", "0 0 0 0 0 0 0 0 1 0", "0 1 1 1 1 1 1 0 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "41",
            timeGoal: 300,
            powerups: {
                time: 0,
                shuffle: 0,
                hint: 0
            },
            collapseMode: "none",
            tileTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 39, 40, 41, 42, 43, 44],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 0 0 1 1 1 0", "0 1 1 1 1 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }, {
            name: "42",
            timeGoal: 15,
            powerups: {
                time: 9,
                shuffle: 9,
                hint: 9
            },
            collapseMode: "none",
            tileTypes: [1],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 1 1 1 1 1 1 1 1 0", "0 1 0 1 1 0 1 1 1 0", "0 1 0 1 1 0 1 1 1 0", "0 1 0 1 1 0 1 1 1 0", "0 1 0 0 0 0 1 0 1 0", "0 1 0 0 0 0 0 1 1 0", "0 1 0 0 0 0 1 1 1 0", "0 1 1 0 0 1 1 1 1 0", "0 1 1 0 0 1 1 1 1 0", "0 1 1 0 0 1 1 1 1 0", "0 0 0 0 0 0 0 0 0 0"]
        }]
    };
    return t
}), define("levelselectbutton", ["pixi", "absolute"], function (t, e) {
    var i = function (t, e, i, n, o) {
        this.initLevelSelectButton(t, e, i, n, o)
    };
    return i.constructor = i, i.prototype = Object.create(t.DisplayObjectContainer.prototype), i.prototype.initLevelSelectButton = function (e, i, n, o, r) {
        t.DisplayObjectContainer.call(this), this.levelIndex = e, this.levelConfig = i, this.locked = n, this.score = o, this.setInteractive(!0), this.tap = this.click = function () {
            this.locked || r(this.levelIndex)
        }.bind(this), this.render()
    }, i.prototype.render = function () {
        for (; this.children.length > 0;) this.removeChild(this.getChildAt(0));
        var i = t.Sprite.fromFrame("level_select_cell.png");
        this.width = i.width, this.height = i.height;
        var n = new e.DigitLabel(5, .8);
        n.setText(this.levelIndex + 1 + ""), n.position.x = (.41 * this.width - n.width) / 2, n.position.y = .075 * this.height, i.addChild(n);
        var o = t.Sprite.fromFrame("level_select_thumbnail_board.png");
        o.position.x = .475 * this.width, o.position.y = .3 * this.height, i.addChild(o);
        var r, s, a, h, u = this.levelConfig.layout.length,
            l = 0 === u ? 0 : (this.levelConfig.layout[0].length + 1) / 2,
            c = t.Texture.fromFrame("level_select_thumbnail_pip.png"),
            d = t.Texture.fromFrame("level_select_thumbnail_pip2.png"),
            p = null;
        for (a = (o.width - 8 * d.width) / 2, h = (o.height - 10 * d.height) / 2, r = 0; 10 > r; r += 1) {
            for (s = 0; 8 > s; s += 1) p = new t.Sprite(d), p.position.x = a, p.position.y = h, o.addChild(p), a += d.width;
            a = (o.width - 8 * d.width) / 2, h += d.height
        }
        for (a = (o.width - l * c.width) / 2, h = (o.height - u * c.height) / 2, r = 0; u > r; r += 1) {
            for (s = 0; l > s; s += 1) p = "1" === this.levelConfig.layout[r].charAt(2 * s) ? new t.Sprite(c) : new t.Sprite(d), r > 0 && u - 1 > r && s > 0 && l - 1 > s && (p.position.x = a, p.position.y = h, o.addChild(p)), a += c.width;
            a = (o.width - l * c.width) / 2, h += c.height
        }
        this.locked || "none" === this.levelConfig.collapseMode || this.addCollapseArrows(o, this.levelConfig.collapseMode);
        var f, m, g, v, I;
        if (this.locked ? (f = this.levelConfig.timeGoal, m = Math.floor(f / 60), g = f % 60, this.stateButton = new e.Button(t.Texture.fromFrame("button_locked_1.png"), t.Texture.fromFrame("button_locked_1.png"), function () {}.bind(this), !0), this.stateButton.alpha = .5) : (f = this.levelConfig.timeGoal, m = Math.floor(f / 60), g = f % 60, this.stateButton = new e.Button(t.Texture.fromFrame("button_game_play_1.png"), t.Texture.fromFrame("button_small_overlay.png"), function () {}.bind(this))), v = new e.DigitLabel(5, .6), v.setText(m + ":" + (10 > g ? "0" + g : g)), v.position.x = .05 * this.width, v.position.y = .63 * this.height, i.addChild(v), this.score > 0) {
            I = new e.DigitLabel(10, .4), I.setText(e.TextUtils.formatInt(this.score)), I.position.x = (this.width - I.width) / 2, I.position.y = .85 * this.height, i.addChild(I);
            var b = new t.Sprite.fromFrame("level_select_checkmark.png");
            b.position.x = .35 * this.width, b.position.y = 0, i.addChild(b)
        }
        this.locked && (o.alpha = .5, v.alpha = .5);
        var y = new e.Snapshot(i);
        this.addChild(new t.Sprite(y.getSnapshot())), this.stateButton.position.x = .1 * this.width, this.stateButton.position.y = .33 * this.height, this.addChild(this.stateButton)
    }, i.prototype.unlock = function (t) {
        this.score = t, this.locked = !1, this.render()
    }, i.prototype.setEnable = function (t) {
        this.setInteractive(t), this.stateButton.setInteractive(t)
    }, i.prototype.addCollapseArrows = function (e, i) {
        var n = t.Texture.fromFrame("collapse_arrow.png"),
            o = new t.Sprite(n),
            r = new t.Sprite(n),
            s = new t.Sprite(n),
            a = new t.Sprite(n);
        switch (o.anchor.x = o.anchor.y = .5, r.anchor.x = r.anchor.y = .5, s.anchor.x = s.anchor.y = .5, a.anchor.x = a.anchor.y = .5, i) {
        case "right":
            break;
        case "left":
            o.rotation = Math.PI, r.rotation = Math.PI, s.rotation = Math.PI, a.rotation = Math.PI;
            break;
        case "up":
            o.rotation = -Math.PI / 2, r.rotation = -Math.PI / 2, s.rotation = -Math.PI / 2, a.rotation = -Math.PI / 2;
            break;
        case "down":
            o.rotation = Math.PI / 2, r.rotation = Math.PI / 2, s.rotation = Math.PI / 2, a.rotation = Math.PI / 2;
            break;
        case "horz_exp":
            o.rotation = Math.PI, r.rotation = 0, s.rotation = Math.PI, a.rotation = 0;
            break;
        case "horz_imp":
            o.rotation = 0, r.rotation = Math.PI, s.rotation = 0, a.rotation = Math.PI;
            break;
        case "vert_exp":
            o.rotation = -Math.PI / 2, r.rotation = -Math.PI / 2, s.rotation = Math.PI / 2, a.rotation = Math.PI / 2;
            break;
        case "vert_imp":
            o.rotation = Math.PI / 2, r.rotation = Math.PI / 2, s.rotation = -Math.PI / 2, a.rotation = -Math.PI / 2
        }
        r.position.x = e.width, s.position.y = e.height, a.position.x = e.width, a.position.y = e.height, e.addChild(o), e.addChild(r), e.addChild(s), e.addChild(a)
    }, i
}), define("levelselectpanel", ["absolute", "levelconfig", "levelselectbutton"], function (t, e, i) {
    var n = function (t, e, i) {
        this.ui = t, this.game = e, this.completed = !1, this._initLevelSelectPanel(t, e, i), this.playPressed = !1
    };
    return n.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), n.prototype._initLevelSelectPanel = function (n, o, r) {
        PIXI.DisplayObjectContainer.call(this), this.startIndex = r, this.levelButtons = [];
        for (var s = t.GameConfig.getVal("completedLevels"), a = r, h = r + 6; h > a; ++a) {
            var u = a > s.length;
            t.Debug.enabled && (u = !1);
            var l = 0;
            s.length > a && (l = s[a].score), this.levelButtons.push(new i(a, e.levels[a], u, l, this.levelSelected.bind(this)))
        }
        this.completed = this.startIndex + 6 < s.length, this.layoutButtons()
    }, n.prototype.layoutButtons = function () {
        for (var t = this.levelButtons[0], e = t.width + t.width / 8, i = t.height + t.height / 50, n = (this.ui.width - (2 * e - t.width / 8)) / 2, o = (this.ui.height - (3 * i - t.height / 50)) / 2, r = 0, s = 6; s > r; ++r) t = this.levelButtons[r], t.position.x = n + r % 2 * e, t.position.y = o, this.addChild(t), 0 === (r + 1) % 2 && (o += i)
    }, n.prototype.levelSelected = function (e) {
        this.playPressed || (this.playPressed = !0, t.Debug.log("Level select pressed!"), this.game.playLevel(e))
    }, n.prototype.enableButtons = function (t) {
        var e, i;
        for (e = 0, i = this.levelButtons.length; i > e; e++) this.levelButtons[e].setEnable(t);
        this.playPressed = !1
    }, n.prototype.updateButtons = function () {
        for (var e = 0, i = t.GameConfig.getVal("completedLevels"), n = this.startIndex, o = i.length; o > n && this.startIndex + 6 > n; n += 1) e = n - this.startIndex, (this.levelButtons[e].locked || this.levelButtons[e].score !== i[n].score) && this.levelButtons[e].unlock(i[n].score);
        e = n - this.startIndex, i.length >= n && this.levelButtons.length > e && this.levelButtons[e].locked && this.levelButtons[e].unlock(0), this.completed = this.startIndex + 6 <= i.length
    }, n
}),
function (t, e) {
    function i() {
        if (!n.READY) {
            n.event.determineEventTypes();
            for (var t in n.gestures) n.gestures.hasOwnProperty(t) && n.detection.register(n.gestures[t]);
            n.event.onTouch(n.DOCUMENT, n.EVENT_MOVE, n.detection.detect), n.event.onTouch(n.DOCUMENT, n.EVENT_END, n.detection.detect), n.READY = !0
        }
    }
    var n = function (t, e) {
        return new n.Instance(t, e || {})
    };
    n.defaults = {
        stop_browser_behavior: {
            userSelect: "none",
            touchAction: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    }, n.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, n.HAS_TOUCHEVENTS = "ontouchstart" in t, n.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i, n.NO_MOUSEEVENTS = n.HAS_TOUCHEVENTS && navigator.userAgent.match(n.MOBILE_REGEX), n.EVENT_TYPES = {}, n.DIRECTION_DOWN = "down", n.DIRECTION_LEFT = "left", n.DIRECTION_UP = "up", n.DIRECTION_RIGHT = "right", n.POINTER_MOUSE = "mouse", n.POINTER_TOUCH = "touch", n.POINTER_PEN = "pen", n.EVENT_START = "start", n.EVENT_MOVE = "move", n.EVENT_END = "end", n.DOCUMENT = document, n.plugins = {}, n.READY = !1, n.Instance = function (t, e) {
        var o = this;
        return i(), this.element = t, this.enabled = !0, this.options = n.utils.extend(n.utils.extend({}, n.defaults), e || {}), this.options.stop_browser_behavior && n.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), n.event.onTouch(t, n.EVENT_START, function (t) {
            o.enabled && n.detection.startDetect(o, t)
        }), this
    }, n.Instance.prototype = {
        on: function (t, e) {
            for (var i = t.split(" "), n = 0; i.length > n; n++) this.element.addEventListener(i[n], e, !1);
            return this
        },
        off: function (t, e) {
            for (var i = t.split(" "), n = 0; i.length > n; n++) this.element.removeEventListener(i[n], e, !1);
            return this
        },
        trigger: function (t, e) {
            var i = n.DOCUMENT.createEvent("Event");
            i.initEvent(t, !0, !0), i.gesture = e;
            var o = this.element;
            return n.utils.hasParent(e.target, o) && (o = e.target), o.dispatchEvent(i), this
        },
        enable: function (t) {
            return this.enabled = t, this
        }
    };
    var o = null,
        r = !1,
        s = !1;
    n.event = {
        bindDom: function (t, e, i) {
            for (var n = e.split(" "), o = 0; n.length > o; o++) t.addEventListener(n[o], i, !1)
        },
        onTouch: function (t, e, i) {
            var a = this;
            this.bindDom(t, n.EVENT_TYPES[e], function (h) {
                var u = h.type.toLowerCase();
                if (!u.match(/mouse/) || !s) {
                    u.match(/touch/) || u.match(/pointerdown/) || u.match(/mouse/) && 1 === h.which ? r = !0 : u.match(/mouse/) && 1 !== h.which && (r = !1), u.match(/touch|pointer/) && (s = !0);
                    var l = 0;
                    r && (n.HAS_POINTEREVENTS && e != n.EVENT_END ? l = n.PointerEvent.updatePointer(e, h) : u.match(/touch/) ? l = h.touches.length : s || (l = u.match(/up/) ? 0 : 1), l > 0 && e == n.EVENT_END ? e = n.EVENT_MOVE : l || (e = n.EVENT_END), l || null === o ? o = h : h = o, i.call(n.detection, a.collectEventData(t, e, h)), n.HAS_POINTEREVENTS && e == n.EVENT_END && (l = n.PointerEvent.updatePointer(e, h))), l || (o = null, r = !1, s = !1, n.PointerEvent.reset())
                }
            })
        },
        determineEventTypes: function () {
            var t;
            t = n.HAS_POINTEREVENTS ? n.PointerEvent.getEvents() : n.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], n.EVENT_TYPES[n.EVENT_START] = t[0], n.EVENT_TYPES[n.EVENT_MOVE] = t[1], n.EVENT_TYPES[n.EVENT_END] = t[2]
        },
        getTouchList: function (t) {
            return n.HAS_POINTEREVENTS ? n.PointerEvent.getTouchList() : t.touches ? t.touches : [{
                identifier: 1,
                pageX: t.pageX,
                pageY: t.pageY,
                target: t.target
            }]
        },
        collectEventData: function (t, e, i) {
            var o = this.getTouchList(i, e),
                r = n.POINTER_TOUCH;
            return (i.type.match(/mouse/) || n.PointerEvent.matchType(n.POINTER_MOUSE, i)) && (r = n.POINTER_MOUSE), {
                center: n.utils.getCenter(o),
                timeStamp: (new Date)
                    .getTime(),
                target: i.target,
                touches: o,
                eventType: e,
                pointerType: r,
                srcEvent: i,
                preventDefault: function () {
                    this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault()
                },
                stopPropagation: function () {
                    this.srcEvent.stopPropagation()
                },
                stopDetect: function () {
                    return n.detection.stopDetect()
                }
            }
        }
    }, n.PointerEvent = {
        pointers: {},
        getTouchList: function () {
            var t = this,
                e = [];
            return Object.keys(t.pointers)
                .sort()
                .forEach(function (i) {
                    e.push(t.pointers[i])
                }), e
        },
        updatePointer: function (t, e) {
            return t == n.EVENT_END ? this.pointers = {} : (e.identifier = e.pointerId, this.pointers[e.pointerId] = e), Object.keys(this.pointers)
                .length
        },
        matchType: function (t, e) {
            if (!e.pointerType) return !1;
            var i = {};
            return i[n.POINTER_MOUSE] = e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == n.POINTER_MOUSE, i[n.POINTER_TOUCH] = e.pointerType == e.MSPOINTER_TYPE_TOUCH || e.pointerType == n.POINTER_TOUCH, i[n.POINTER_PEN] = e.pointerType == e.MSPOINTER_TYPE_PEN || e.pointerType == n.POINTER_PEN, i[t]
        },
        getEvents: function () {
            return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
        },
        reset: function () {
            this.pointers = {}
        }
    }, n.utils = {
        extend: function (t, i, n) {
            for (var o in i) t[o] !== e && n || (t[o] = i[o]);
            return t
        },
        hasParent: function (t, e) {
            for (; t;) {
                if (t == e) return !0;
                t = t.parentNode
            }
            return !1
        },
        getCenter: function (t) {
            for (var e = [], i = [], n = 0, o = t.length; o > n; n++) e.push(t[n].pageX), i.push(t[n].pageY);
            return {
                pageX: (Math.min.apply(Math, e) + Math.max.apply(Math, e)) / 2,
                pageY: (Math.min.apply(Math, i) + Math.max.apply(Math, i)) / 2
            }
        },
        getVelocity: function (t, e, i) {
            return {
                x: Math.abs(e / t) || 0,
                y: Math.abs(i / t) || 0
            }
        },
        getAngle: function (t, e) {
            var i = e.pageY - t.pageY,
                n = e.pageX - t.pageX;
            return 180 * Math.atan2(i, n) / Math.PI
        },
        getDirection: function (t, e) {
            var i = Math.abs(t.pageX - e.pageX),
                o = Math.abs(t.pageY - e.pageY);
            return i >= o ? t.pageX - e.pageX > 0 ? n.DIRECTION_LEFT : n.DIRECTION_RIGHT : t.pageY - e.pageY > 0 ? n.DIRECTION_UP : n.DIRECTION_DOWN
        },
        getDistance: function (t, e) {
            var i = e.pageX - t.pageX,
                n = e.pageY - t.pageY;
            return Math.sqrt(i * i + n * n)
        },
        getScale: function (t, e) {
            return t.length >= 2 && e.length >= 2 ? this.getDistance(e[0], e[1]) / this.getDistance(t[0], t[1]) : 1
        },
        getRotation: function (t, e) {
            return t.length >= 2 && e.length >= 2 ? this.getAngle(e[1], e[0]) - this.getAngle(t[1], t[0]) : 0
        },
        isVertical: function (t) {
            return t == n.DIRECTION_UP || t == n.DIRECTION_DOWN
        },
        stopDefaultBrowserBehavior: function (t, e) {
            var i, n = ["webkit", "khtml", "moz", "ms", "o", ""];
            if (e && t.style) {
                for (var o = 0; n.length > o; o++)
                    for (var r in e) e.hasOwnProperty(r) && (i = r, n[o] && (i = n[o] + i.substring(0, 1)
                        .toUpperCase() + i.substring(1)), t.style[i] = e[r]);
                "none" == e.userSelect && (t.onselectstart = function () {
                    return !1
                })
            }
        }
    }, n.detection = {
        gestures: [],
        current: null,
        previous: null,
        stopped: !1,
        startDetect: function (t, e) {
            this.current || (this.stopped = !1, this.current = {
                inst: t,
                startEvent: n.utils.extend({}, e),
                lastEvent: !1,
                name: ""
            }, this.detect(e))
        },
        detect: function (t) {
            if (this.current && !this.stopped) {
                t = this.extendEventData(t);
                for (var e = this.current.inst.options, i = 0, o = this.gestures.length; o > i; i++) {
                    var r = this.gestures[i];
                    if (!this.stopped && e[r.name] !== !1 && r.handler.call(r, t, this.current.inst) === !1) {
                        this.stopDetect();
                        break
                    }
                }
                return this.current && (this.current.lastEvent = t), t.eventType == n.EVENT_END && !t.touches.length - 1 && this.stopDetect(), t
            }
        },
        stopDetect: function () {
            this.previous = n.utils.extend({}, this.current), this.current = null, this.stopped = !0
        },
        extendEventData: function (t) {
            var e = this.current.startEvent;
            if (e && (t.touches.length != e.touches.length || t.touches === e.touches)) {
                e.touches = [];
                for (var i = 0, o = t.touches.length; o > i; i++) e.touches.push(n.utils.extend({}, t.touches[i]))
            }
            var r = t.timeStamp - e.timeStamp,
                s = t.center.pageX - e.center.pageX,
                a = t.center.pageY - e.center.pageY,
                h = n.utils.getVelocity(r, s, a);
            return n.utils.extend(t, {
                deltaTime: r,
                deltaX: s,
                deltaY: a,
                velocityX: h.x,
                velocityY: h.y,
                distance: n.utils.getDistance(e.center, t.center),
                angle: n.utils.getAngle(e.center, t.center),
                direction: n.utils.getDirection(e.center, t.center),
                scale: n.utils.getScale(e.touches, t.touches),
                rotation: n.utils.getRotation(e.touches, t.touches),
                startEvent: e
            }), t
        },
        register: function (t) {
            var i = t.defaults || {};
            return i[t.name] === e && (i[t.name] = !0), n.utils.extend(n.defaults, i, !0), t.index = t.index || 1e3, this.gestures.push(t), this.gestures.sort(function (t, e) {
                return t.index < e.index ? -1 : t.index > e.index ? 1 : 0
            }), this.gestures
        }
    }, n.gestures = n.gestures || {}, n.gestures.Hold = {
        name: "hold",
        index: 10,
        defaults: {
            hold_timeout: 500,
            hold_threshold: 1
        },
        timer: null,
        handler: function (t, e) {
            switch (t.eventType) {
            case n.EVENT_START:
                clearTimeout(this.timer), n.detection.current.name = this.name, this.timer = setTimeout(function () {
                    "hold" == n.detection.current.name && e.trigger("hold", t)
                }, e.options.hold_timeout);
                break;
            case n.EVENT_MOVE:
                t.distance > e.options.hold_threshold && clearTimeout(this.timer);
                break;
            case n.EVENT_END:
                clearTimeout(this.timer)
            }
        }
    }, n.gestures.Tap = {
        name: "tap",
        index: 100,
        defaults: {
            tap_max_touchtime: 250,
            tap_max_distance: 10,
            tap_always: !0,
            doubletap_distance: 20,
            doubletap_interval: 300
        },
        handler: function (t, e) {
            if (t.eventType == n.EVENT_END) {
                var i = n.detection.previous,
                    o = !1;
                if (t.deltaTime > e.options.tap_max_touchtime || t.distance > e.options.tap_max_distance) return;
                i && "tap" == i.name && t.timeStamp - i.lastEvent.timeStamp < e.options.doubletap_interval && t.distance < e.options.doubletap_distance && (e.trigger("doubletap", t), o = !0), (!o || e.options.tap_always) && (n.detection.current.name = "tap", e.trigger(n.detection.current.name, t))
            }
        }
    }, n.gestures.Swipe = {
        name: "swipe",
        index: 40,
        defaults: {
            swipe_max_touches: 1,
            swipe_velocity: .7
        },
        handler: function (t, e) {
            if (t.eventType == n.EVENT_END) {
                if (e.options.swipe_max_touches > 0 && t.touches.length > e.options.swipe_max_touches) return;
                (t.velocityX > e.options.swipe_velocity || t.velocityY > e.options.swipe_velocity) && (e.trigger(this.name, t), e.trigger(this.name + t.direction, t))
            }
        }
    }, n.gestures.Drag = {
        name: "drag",
        index: 50,
        defaults: {
            drag_min_distance: 10,
            drag_max_touches: 1,
            drag_block_horizontal: !1,
            drag_block_vertical: !1,
            drag_lock_to_axis: !1,
            drag_lock_min_distance: 25
        },
        triggered: !1,
        handler: function (t, i) {
            if (n.detection.current.name != this.name && this.triggered) return i.trigger(this.name + "end", t), this.triggered = !1, e;
            if (!(i.options.drag_max_touches > 0 && t.touches.length > i.options.drag_max_touches)) switch (t.eventType) {
            case n.EVENT_START:
                this.triggered = !1;
                break;
            case n.EVENT_MOVE:
                if (t.distance < i.options.drag_min_distance && n.detection.current.name != this.name) return;
                n.detection.current.name = this.name, (n.detection.current.lastEvent.drag_locked_to_axis || i.options.drag_lock_to_axis && i.options.drag_lock_min_distance <= t.distance) && (t.drag_locked_to_axis = !0);
                var o = n.detection.current.lastEvent.direction;
                t.drag_locked_to_axis && o !== t.direction && (t.direction = n.utils.isVertical(o) ? 0 > t.deltaY ? n.DIRECTION_UP : n.DIRECTION_DOWN : 0 > t.deltaX ? n.DIRECTION_LEFT : n.DIRECTION_RIGHT), this.triggered || (i.trigger(this.name + "start", t), this.triggered = !0), i.trigger(this.name, t), i.trigger(this.name + t.direction, t), (i.options.drag_block_vertical && n.utils.isVertical(t.direction) || i.options.drag_block_horizontal && !n.utils.isVertical(t.direction)) && t.preventDefault();
                break;
            case n.EVENT_END:
                this.triggered && i.trigger(this.name + "end", t), this.triggered = !1
            }
        }
    }, n.gestures.Transform = {
        name: "transform",
        index: 45,
        defaults: {
            transform_min_scale: .01,
            transform_min_rotation: 1,
            transform_always_block: !1
        },
        triggered: !1,
        handler: function (t, i) {
            if (n.detection.current.name != this.name && this.triggered) return i.trigger(this.name + "end", t), this.triggered = !1, e;
            if (!(2 > t.touches.length)) switch (i.options.transform_always_block && t.preventDefault(), t.eventType) {
            case n.EVENT_START:
                this.triggered = !1;
                break;
            case n.EVENT_MOVE:
                var o = Math.abs(1 - t.scale),
                    r = Math.abs(t.rotation);
                if (i.options.transform_min_scale > o && i.options.transform_min_rotation > r) return;
                n.detection.current.name = this.name, this.triggered || (i.trigger(this.name + "start", t), this.triggered = !0), i.trigger(this.name, t), r > i.options.transform_min_rotation && i.trigger("rotate", t), o > i.options.transform_min_scale && (i.trigger("pinch", t), i.trigger("pinch" + (1 > t.scale ? "in" : "out"), t));
                break;
            case n.EVENT_END:
                this.triggered && i.trigger(this.name + "end", t), this.triggered = !1
            }
        }
    }, n.gestures.Touch = {
        name: "touch",
        index: -1 / 0,
        defaults: {
            prevent_default: !1,
            prevent_mouseevents: !1
        },
        handler: function (t, i) {
            return i.options.prevent_mouseevents && t.pointerType == n.POINTER_MOUSE ? (t.stopDetect(), e) : (i.options.prevent_default && t.preventDefault(), t.eventType == n.EVENT_START && i.trigger(this.name, t), e)
        }
    }, n.gestures.Release = {
        name: "release",
        index: 1 / 0,
        handler: function (t, e) {
            t.eventType == n.EVENT_END && e.trigger(this.name, t)
        }
    }, "object" == typeof module && "object" == typeof module.exports ? module.exports = n : (t.Hammer = n, "function" == typeof t.define && t.define.amd && t.define("hammer", [], function () {
        return n
    }))
}(this), define("hammer", function (t) {
    return function () {
        var e;
        return e || t.Hammer
    }
}(this)), define("levelselectscreen", ["absolute", "levelconfig", "levelselectbutton", "levelselectpanel", "hammer"], function (t, e, i, n, o) {
    var r = function (t, e) {
        this.ui = t, this.game = e, this._initLevelSelectScreen(t, e)
    };
    return r.prototype = Object.create(t.Screen.prototype), r.prototype._initLevelSelectScreen = function (i) {
        this.kPanThreshold = this.ui.width / 6, t.Screen.call(this);
        var s = PIXI.Sprite.fromFrame("main_menu.png");
        this.addChild(s), this.panelTray = new PIXI.DisplayObjectContainer, this.addChild(this.panelTray), this.currentPanel = 0, this.panels = [];
        for (var a = 0, h = e.levels.length; h > a; a += 6) {
            var u = new n(this.ui, this.game, a);
            u.position.x = this.panels.length * this.ui.width, this.panelTray.addChild(u), this.panels.push(u)
        }
        this.lastDeltaX = 0, this.startX = 0, this.trayWidth = this.panels.length * this.ui.width, o(this.ui.container)
            .on("dragstart", r.prototype.handleDragStart.bind(this)), o(this.ui.container)
            .on("drag", r.prototype.handleDrag.bind(this)), o(this.ui.container)
            .on("dragend", r.prototype.handleDragEnd.bind(this));
        var l = PIXI.Texture.fromFrame("level_select_thumbnail_pip.png"),
            c = PIXI.Texture.fromFrame("level_select_thumbnail_pip2.png");
        this.pageIndicator = new PIXI.DisplayObjectContainer;
        for (var a = 0; this.panels.length > a; a++) {
            var d = new PIXI.Sprite(c);
            d.position.x = 2 * a * c.width, this.pageIndicator.addChild(d)
        }
        this.currentPageMarker = new PIXI.Sprite(l), this.pageIndicator.addChild(this.currentPageMarker), this.pageIndicator.position.y = i.height - 1.5 * c.height, this.pageIndicator.position.x = (i.width - 2 * this.panels.length * c.width - c.width) / 2, this.addChild(this.pageIndicator)
    }, r.prototype.handleDragStart = function () {
        this.lastDeltaX = 0, this.startX = -(this.currentPanel * this.ui.width), this.enableButtons(!1)
    }, r.prototype.handleDrag = function (e) {
        this.panelTray.position.x += (e.gesture.deltaX - this.lastDeltaX) * t.ScreenMetrics.devicePixelRatio / 2, this.lastDeltaX = e.gesture.deltaX
    }, r.prototype.handleDragEnd = function (t) {
        this.lastDeltaX = 0;
        var e = this.startX,
            i = this.currentPanel;
        t.gesture.deltaX < -this.kPanThreshold ? (e -= this.ui.width, i += 1) : t.gesture.deltaX > this.kPanThreshold && (e += this.ui.width, i -= 1), (e > 0 || -((this.panels.length - 1) * this.ui.width) > e) && (e = this.startX, i = this.currentPanel);
        var n = this;
        new TWEEN.Tween({
            x: this.panelTray.position.x
        })
            .to({
                x: e
            }, 200)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
                n.panelTray.position.x = this.x
            })
            .onComplete(function () {
                n.enableButtons(!0), n.setCurrentPanel(i)
            })
            .start()
    }, r.prototype.setCurrentPanel = function (t) {
        this.currentPanel = t, this.currentPageMarker.position.x = 2 * t * this.currentPageMarker.width
    }, r.prototype.enableButtons = function (t) {
        var e, i;
        for (e = 0, i = this.panels.length; i > e; e++) this.panels[e].enableButtons(t)
    }, r.prototype.onShow = function () {
        t.Screen.prototype.onShow.call(this);
        var e, i, n = -1;
        for (this.enableButtons(!1), e = 0, i = this.panels.length; i > e; e++) this.panels[e].updateButtons(), this.panels[e].completed && (n = e);
        if (this.currentPanel !== n + 1) {
            var o = this,
                r = -this.ui.width * (n + 1 - this.currentPanel);
            new TWEEN.Tween({
                x: this.panelTray.position.x
            })
                .to({
                    x: r
                }, 500)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    o.panelTray.position.x = this.x
                })
                .onComplete(function () {
                    o.enableButtons(!0), o.setCurrentPanel(n + 1)
                })
                .start()
        } else setTimeout(function () {
            this.enableButtons(!0)
        }.bind(this), 250)
    }, r.prototype.onHide = function () {
        t.Screen.prototype.onHide.call(this)
    }, r
}), define("timer", ["absolute"], function (t) {
    var e = function (t) {
        this._initTimer(t)
    };
    return e.prototype = Object.create(PIXI.Sprite.prototype), e.prototype._initTimer = function (e) {
        PIXI.Sprite.call(this, PIXI.Texture.fromFrame("timer_meter.png")), this.ui = e, this.timerAlertBg = PIXI.Sprite.fromFrame("timer_meter_alert.png"), this.timerAlertBg.position.x = 0, this.timerAlertBg.position.y = 0, this.timerNeedle = PIXI.Sprite.fromFrame("timer_needle.png"), this.timerNeedle.anchor.x = .5, this.timerNeedle.anchor.y = 1, this.timerNeedle.position.x = t.Coords.x(278), this.timerNeedle.position.y = t.Coords.y(507), this.timerNeedle.rotation = Math.PI / 6, this.addChild(this.timerNeedle);
        var i = PIXI.Sprite.fromFrame("timer_frame.png");
        i.position.x = 0, i.position.y = 0, this.addChild(i), this.timeDisplay = new t.DigitLabel(5, .8), this.timeDisplay.setText("0:00"), this.timeDisplay.position.x = (this.width - this.timeDisplay.width) / 2, this.timeDisplay.position.y = .7 * i.height, this.addChild(this.timeDisplay)
    }, e.prototype.setMaxTime = function (t) {
        this.maxTime = t, this.timerNeedle.visible = !0
    }, e.prototype.setTime = function (t) {
        if (this.time = t, this.timeDisplay.setText(this.formatTime(t)), this.timeDisplay.position.x = (this.width - this.timeDisplay.width) / 2, t > 0) {
            var e = Math.PI / 3 * (Math.round(100 * (t / this.maxTime)) / 100 - .5);
            this.timerNeedle.rotation = e
        } else 0 === t && (this.timerNeedle.rotation = 0, this.timerNeedle.visible = !1)
    }, e.prototype.formatTime = function (t) {
        var e = Math.floor(t / 60),
            i = t % 60 + "";
        return e + ":" + (10 > i ? "0" + i : i)
    }, e
}), define("levelindicator", ["absolute"], function (t) {
    var e = function (t) {
        this._initLevelIndicator(t)
    };
    return e.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), e.prototype._initLevelIndicator = function (e) {
        PIXI.DisplayObjectContainer.call(this), this.ui = e, this.levelLabel = new PIXI.Sprite.fromFrame("level_word.png"), this.levelLabel.position.x = 0, this.levelLabel.position.y = 0, this.addChild(this.levelLabel), this.levelNumber = new t.DigitLabel(2), this.levelNumber.setText("0"), this.levelNumber.position.x = (this.levelLabel.width - this.levelNumber.width) / 2, this.levelNumber.position.y = this.levelLabel.height, this.addChild(this.levelNumber)
    }, e.prototype.setLevel = function (t) {
        this.levelNumber.setText(t + ""), this.levelNumber.position.x = (this.levelLabel.width - this.levelNumber.width) / 2
    }, e
}), define("matchsegment", ["pixi", "absolute"], function (t) {
    var e = function (t) {
        this.initMatchSegment(t), this.underBoard = !1
    };
    return e.constructor = e, e.prototype = Object.create(t.DisplayObjectContainer.prototype), e.prototype.initMatchSegment = function (e) {
        var i = this.kindToTextureBase(e);
        this.kind = e, t.DisplayObjectContainer.call(this), this.aura = t.Sprite.fromFrame(i + "_aura.png"), this.width = this.aura.width, this.height = this.aura.height, this.aura.anchor.x = this.aura.anchor.y = .5, this.aura.position.x = this.width / 2, this.aura.position.y = this.height / 2, this.addChild(this.aura), this.beam = t.Sprite.fromFrame(i + "_beam.png"), this.beam.anchor.x = this.beam.anchor.y = .5, this.beam.position.x = this.width / 2, this.beam.position.y = this.height / 2, this.addChild(this.beam), "path_vert" === i && (this.aura.scale.y = (this.aura.height + .5) / this.aura.height, this.beam.scale.y = (this.beam.height + .5) / this.beam.height), this.loop = !1, this.animationSpeed = .25, this.isCorner(e) && this.rotate(e)
    }, e.prototype.isCorner = function (t) {
        return -1 !== t.indexOf("corner")
    }, e.prototype.rotate = function (t) {
        "corner_ur" === t && (this.aura.scale.x = -1, this.beam.scale.x = -1), "corner_ll" === t && (this.aura.scale.y = -1, this.beam.scale.y = -1), "corner_lr" === t && (this.aura.scale.x = -1, this.aura.scale.y = -1, this.beam.scale.x = -1, this.beam.scale.y = -1)
    }, e.prototype.kindToTextureBase = function (t) {
        var e = "path_";
        switch (t) {
        case "corner_ur":
        case "corner_ul":
        case "corner_lr":
        case "corner_ll":
            e += "corner";
            break;
        case "tile":
            e += "tilemass";
            break;
        case "horz":
            e += "horiz";
            break;
        case "vert":
            e += "vert"
        }
        return e
    }, e
});
var TWEEN = TWEEN || function () {
        var t = [];
        return {
            REVISION: "10",
            getAll: function () {
                return t
            },
            removeAll: function () {
                t = []
            },
            add: function (e) {
                t.push(e)
            },
            remove: function (e) {
                e = t.indexOf(e), -1 !== e && t.splice(e, 1)
            },
            update: function (e) {
                if (0 === t.length) return !1;
                for (var i = 0, n = t.length, e = void 0 !== e ? e : void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(); n > i;) t[i].update(e) ? i++ : (t.splice(i, 1), n--);
                return !0
            }
        }
    }();
TWEEN.Tween = function (t) {
    var e, i = {}, n = {}, o = {}, r = 1e3,
        s = 0,
        a = 0,
        h = null,
        u = TWEEN.Easing.Linear.None,
        l = TWEEN.Interpolation.Linear,
        c = [],
        d = null,
        p = !1,
        f = null,
        m = null;
    for (e in t) i[e] = parseFloat(t[e], 10);
    this.to = function (t, e) {
        return void 0 !== e && (r = e), n = t, this
    }, this.start = function (e) {
        TWEEN.add(this), p = !1, h = void 0 !== e ? e : void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(), h += a;
        for (var r in n) {
            if (n[r] instanceof Array) {
                if (0 === n[r].length) continue;
                n[r] = [t[r]].concat(n[r])
            }
            i[r] = t[r], !1 == i[r] instanceof Array && (i[r] *= 1), o[r] = i[r] || 0
        }
        return this
    }, this.stop = function () {
        return TWEEN.remove(this), this
    }, this.delay = function (t) {
        return a = t, this
    }, this.repeat = function (t) {
        return s = t, this
    }, this.easing = function (t) {
        return u = t, this
    }, this.interpolation = function (t) {
        return l = t, this
    }, this.chain = function () {
        return c = arguments, this
    }, this.onStart = function (t) {
        return d = t, this
    }, this.onUpdate = function (t) {
        return f = t, this
    }, this.onComplete = function (t) {
        return m = t, this
    }, this.update = function (e) {
        if (h > e) return !0;
        !1 === p && (null !== d && d.call(t), p = !0);
        var g, v = (e - h) / r,
            v = v > 1 ? 1 : v,
            I = u(v);
        for (g in n) {
            var b = i[g] || 0,
                y = n[g];
            y instanceof Array ? t[g] = l(y, I) : ("string" == typeof y && (y = b + parseFloat(y, 10)), t[g] = b + (y - b) * I)
        }
        if (null !== f && f.call(t, I), 1 == v) {
            if (!(s > 0)) {
                for (null !== m && m.call(t), v = 0, I = c.length; I > v; v++) c[v].start(e);
                return !1
            }
            isFinite(s) && s--;
            for (g in o) "string" == typeof n[g] && (o[g] += parseFloat(n[g], 10)), i[g] = o[g];
            h = e + a
        }
        return !0
    }
}, TWEEN.Easing = {
    Linear: {
        None: function (t) {
            return t
        }
    },
    Quadratic: {
        In: function (t) {
            return t * t
        },
        Out: function (t) {
            return t * (2 - t)
        },
        InOut: function (t) {
            return 1 > (t *= 2) ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        }
    },
    Cubic: {
        In: function (t) {
            return t * t * t
        },
        Out: function (t) {
            return --t * t * t + 1
        },
        InOut: function (t) {
            return 1 > (t *= 2) ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        }
    },
    Quartic: {
        In: function (t) {
            return t * t * t * t
        },
        Out: function (t) {
            return 1 - --t * t * t * t
        },
        InOut: function (t) {
            return 1 > (t *= 2) ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        }
    },
    Quintic: {
        In: function (t) {
            return t * t * t * t * t
        },
        Out: function (t) {
            return --t * t * t * t * t + 1
        },
        InOut: function (t) {
            return 1 > (t *= 2) ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        }
    },
    Sinusoidal: {
        In: function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        },
        Out: function (t) {
            return Math.sin(t * Math.PI / 2)
        },
        InOut: function (t) {
            return .5 * (1 - Math.cos(Math.PI * t))
        }
    },
    Exponential: {
        In: function (t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1)
        },
        Out: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        },
        InOut: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : 1 > (t *= 2) ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
        }
    },
    Circular: {
        In: function (t) {
            return 1 - Math.sqrt(1 - t * t)
        },
        Out: function (t) {
            return Math.sqrt(1 - --t * t)
        },
        InOut: function (t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }
    },
    Elastic: {
        In: function (t) {
            var e, i = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / .4)))
        },
        Out: function (t) {
            var e, i = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / .4) + 1)
        },
        InOut: function (t) {
            var e, i = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), 1 > (t *= 2) ? -.5 * i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / .4) : .5 * i * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / .4) + 1)
        }
    },
    Back: {
        In: function (t) {
            return t * t * (2.70158 * t - 1.70158)
        },
        Out: function (t) {
            return --t * t * (2.70158 * t + 1.70158) + 1
        },
        InOut: function (t) {
            return 1 > (t *= 2) ? .5 * t * t * (3.5949095 * t - 2.5949095) : .5 * ((t -= 2) * t * (3.5949095 * t + 2.5949095) + 2)
        }
    },
    Bounce: {
        In: function (t) {
            return 1 - TWEEN.Easing.Bounce.Out(1 - t)
        },
        Out: function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        },
        InOut: function (t) {
            return .5 > t ? .5 * TWEEN.Easing.Bounce.In(2 * t) : .5 * TWEEN.Easing.Bounce.Out(2 * t - 1) + .5
        }
    }
}, TWEEN.Interpolation = {
    Linear: function (t, e) {
        var i = t.length - 1,
            n = i * e,
            o = Math.floor(n),
            r = TWEEN.Interpolation.Utils.Linear;
        return 0 > e ? r(t[0], t[1], n) : e > 1 ? r(t[i], t[i - 1], i - n) : r(t[o], t[o + 1 > i ? i : o + 1], n - o)
    },
    Bezier: function (t, e) {
        var i, n = 0,
            o = t.length - 1,
            r = Math.pow,
            s = TWEEN.Interpolation.Utils.Bernstein;
        for (i = 0; o >= i; i++) n += r(1 - e, o - i) * r(e, i) * t[i] * s(o, i);
        return n
    },
    CatmullRom: function (t, e) {
        var i = t.length - 1,
            n = i * e,
            o = Math.floor(n),
            r = TWEEN.Interpolation.Utils.CatmullRom;
        return t[0] === t[i] ? (0 > e && (o = Math.floor(n = i * (1 + e))), r(t[(o - 1 + i) % i], t[o], t[(o + 1) % i], t[(o + 2) % i], n - o)) : 0 > e ? t[0] - (r(t[0], t[0], t[1], t[1], -n) - t[0]) : e > 1 ? t[i] - (r(t[i], t[i], t[i - 1], t[i - 1], n - i) - t[i]) : r(t[o ? o - 1 : 0], t[o], t[o + 1 > i ? i : o + 1], t[o + 2 > i ? i : o + 2], n - o)
    },
    Utils: {
        Linear: function (t, e, i) {
            return (e - t) * i + t
        },
        Bernstein: function (t, e) {
            var i = TWEEN.Interpolation.Utils.Factorial;
            return i(t) / i(e) / i(t - e)
        },
        Factorial: function () {
            var t = [1];
            return function (e) {
                var i, n = 1;
                if (t[e]) return t[e];
                for (i = e; i > 1; i--) n *= i;
                return t[e] = n
            }
        }(),
        CatmullRom: function (t, e, i, n, o) {
            var t = .5 * (i - t),
                n = .5 * (n - e),
                r = o * o;
            return (2 * e - 2 * i + t + n) * o * r + (-3 * e + 3 * i - 2 * t - n) * r + t * o + e
        }
    }
}, define("tween", function (t) {
    return function () {
        var e;
        return e || t.TWEEN
    }
}(this)), define("tile", ["pixi", "absolute", "matchsegment", "tween"], function (t, e, i, n) {
    var o = function (t, e, i, n) {
        this.initTile(t, e, i, n)
    };
    return o.constructor = o, o.prototype = Object.create(t.Sprite.prototype), o.prototype.initTile = function (e, i, n, o) {
        this.isPowerup = !1, this.space = 0, this.row = e, this.col = i, this.kind = n, this.selected = !1, this.burning = !1, t.Sprite.call(this, t.Texture.fromFrame("tile_DPL_shimmer_000.png")), this.background = t.Sprite.fromFrame("tile_DPL_basic.png"), this.addChild(this.background);
        var r = null;
        "string" == typeof n ? (r = "tiles_powerup_" + this.kind + "_01.png", this.isPowerup = !0) : 0 !== this.kind && (r = "tile_DPL__" + (10 > this.kind ? "0" + this.kind : this.kind) + ".png"), r && (this.tileSprite = t.Sprite.fromFrame(r), this.tileSprite.anchor.x = .5, this.tileSprite.anchor.y = .5, this.tileSprite.position.x = this.width / 2, this.tileSprite.position.y = this.height / 2, this.addChild(this.tileSprite)), this.position.x = this.col * (this.width + this.space), this.position.y = this.row * (this.height + this.space), this.setInteractive(!0), Modernizr.touch ? this.touchstart = function (t) {
            o(this.row, this.col, this, t)
        } : this.click = function (t) {
            o(this.row, this.col, this, t)
        }, this.selectionAnimation = this.makeSelectionAnimation(), this.selectionAnimation.animationSpeed = .25, this.selectionAnimation.anchor.x = .5, this.selectionAnimation.anchor.y = .5, this.selectionAnimation.position.x = this.width / 2, this.selectionAnimation.position.y = this.height / 2, this.hintAnimation = this.makeHintAnimation(), this.hintAnimation.anchor.x = .5, this.hintAnimation.anchor.y = .5, this.hintAnimation.position.x = this.width / 2, this.hintAnimation.position.y = this.height / 2, this.shimmerAnimation = this.makeShimmerAnimation(), this.shimmerAnimation.animationSpeed = .25, this.shimmerAnimation.anchor.x = .5, this.shimmerAnimation.anchor.y = .5, this.shimmerAnimation.position.x = this.width / 2, this.shimmerAnimation.position.y = this.height / 2, this.shimmerAnimation.loop = !1, this.burnoutAnimation = null
    }, o.prototype.dropIn = function (t, e) {
        var i = 60 * (12 - t);
        this.setInteractive(!1), this.row = t, this.col = e, this.animateTo(this.col * (this.width + this.space), this.row * (this.height + this.space), i, 500, n.Easing.Cubic.In, n.Interpolation.Linear)
    }, o.prototype.updateLocation = function (t, e, i, o) {
        var r = 0;
        return o || t !== this.row || e !== this.col ? (this.setInteractive(!1), r = e !== this.col ? 30 * (i > 0 ? e : 10 - e) : 30 * (i > 0 ? t : 12 - t), this.row = t, this.col = e, this.animateTo(this.col * (this.width + this.space), this.row * (this.height + this.space), r, 200, n.Easing.Cubic.In, n.Interpolation.Linear, function () {
            this.setInteractive(!0)
        }.bind(this)), !0) : !1
    }, o.prototype.animateTo = function (t, i, o, r, s, a, h) {
        var u = this,
            l = [],
            c = [];
        a !== n.Interpolation.Linear && (l.push(this.position.x - e.Coords.x(100)), c.push(this.position.y - e.Coords.y(100))), l.push(t), c.push(i), new n.Tween({
            x: this.position.x,
            y: this.position.y
        })
            .delay(o)
            .to({
                x: l,
                y: c
            }, r)
            .easing(s)
            .onUpdate(function () {
                u.position.x = this.x, u.position.y = this.y
            })
            .onComplete(function () {
                h && h(u)
            })
            .interpolation(a)
            .start()
    }, o.prototype.updateKind = function (e) {
        if (this.kind !== e && (this.kind = e, this.removeChild(this.tileSprite), 0 !== this.kind)) {
            var i = "tile_DPL__" + (10 > this.kind ? "0" + this.kind : this.kind) + ".png";
            this.tileSprite = t.Sprite.fromFrame(i), this.addChild(this.tileSprite)
        }
    }, o.prototype.isAdjacent = function (t) {
        return 1 === Math.abs(this.row - t.row) && this.col === t.col || 1 === Math.abs(this.col - t.col) && this.row === t.row
    }, o.prototype.burnout = function (t) {
        this.burning = !0, this.isPowerup || (this.tileSprite.alpha = .5), this.removeChild(this.background), t.position.x = (this.width - t.width) / 2, t.position.y = (this.height - t.height) / 2, this.addChildAt(t, 0)
    }, o.prototype.setSelected = function (t) {
        if (!this.burning)
            if (this.selected = t, t) this.addChildAt(this.selectionAnimation, 1), this.selectionAnimation.play();
            else try {
                this.removeChild(this.selectionAnimation), this.selectionAnimation.stop()
            } catch (e) {}
    }, o.prototype.makeSelectionAnimation = function () {
        var e, i = "tile_DPL_selection_0",
            n = 7,
            o = [];
        for (e = 0; n > e; e += 1) o.push(new t.Texture.fromFrame(i + (10 > e ? "0" + e : e) + ".png"));
        return new t.MovieClip(o)
    }, o.prototype.makeHintAnimation = function () {
        return t.Sprite.fromFrame("tile_hint.png")
    }, o.prototype.makeShimmerAnimation = function () {
        var e, i = "tile_DPL_shimmer_0",
            n = 8,
            o = [];
        for (e = 0; n > e; e += 1) o.push(new t.Texture.fromFrame(i + (10 > e ? "0" + e : e) + ".png"));
        return new t.MovieClip(o)
    }, o.prototype.showHint = function () {
        var t = this,
            e = 3;
        this.addChildAt(this.hintAnimation, 1), this.hintAnimation.alpha = 0, new n.Tween({
            alpha: 0
        })
            .to({
                alpha: 1
            }, 425)
            .easing(n.Easing.Sinusoidal.InOut)
            .onUpdate(function () {
                t.hintAnimation.alpha = this.alpha
            })
            .onComplete(function () {
                t.hintAnimation.alpha = 1, setTimeout(function () {
                    t.removeChild(t.hintAnimation)
                }, 200)
            })
            .repeat(e - 1)
            .start()
    }, o.prototype.showShimmer = function () {
        var t = 2;
        this.addChild(this.shimmerAnimation), this.shimmerAnimation.loop = !1, this.shimmerAnimation.onComplete = function () {
            0 >= --t ? setTimeout(function () {
                this.removeChild(this.shimmerAnimation)
            }.bind(this), 0) : this.shimmerAnimation.gotoAndPlay(0)
        }.bind(this), this.shimmerAnimation.gotoAndPlay(0)
    }, o
});
var AStar = AStar || {}, GraphNodeType = {
        OPEN: 0
    };
AStar.Graph = function (t) {
    for (var e = [], i = 0; t.length > i; i++) {
        e[i] = [];
        for (var n = 0, o = t[i]; o.length > n; n++) e[i][n] = new GraphNode(i, n, o[n].kind)
    }
    this.input = t, this.nodes = e
}, AStar.Graph.prototype.toString = function () {
    for (var t, e, i, n, o = "\n", r = this.nodes, s = 0, a = r.length; a > s; s++) {
        for (t = "", e = r[s], i = 0, n = e.length; n > i; i++) t += e[i].type + " ";
        o = o + t + "\n"
    }
    return o
}, GraphNode.prototype.toString = function () {
    return "[" + this.x + " " + this.y + "]"
}, GraphNode.prototype.isWall = function () {
    return this.type != GraphNodeType.OPEN
}, BinaryHeap.prototype = {
    push: function (t) {
        this.content.push(t), this.sinkDown(this.content.length - 1)
    },
    pop: function () {
        var t = this.content[0],
            e = this.content.pop();
        return this.content.length > 0 && (this.content[0] = e, this.bubbleUp(0)), t
    },
    remove: function (t) {
        var e = this.content.indexOf(t),
            i = this.content.pop();
        e !== this.content.length - 1 && (this.content[e] = i, this.scoreFunction(i) < this.scoreFunction(t) ? this.sinkDown(e) : this.bubbleUp(e))
    },
    size: function () {
        return this.content.length
    },
    rescoreElement: function (t) {
        this.sinkDown(this.content.indexOf(t))
    },
    sinkDown: function (t) {
        for (var e = this.content[t]; t > 0;) {
            var i = (t + 1 >> 1) - 1,
                n = this.content[i];
            if (!(this.scoreFunction(e) < this.scoreFunction(n))) break;
            this.content[i] = e, this.content[t] = n, t = i
        }
    },
    bubbleUp: function (t) {
        for (var e = this.content.length, i = this.content[t], n = this.scoreFunction(i);;) {
            var o = t + 1 << 1,
                r = o - 1,
                s = null;
            if (e > r) {
                var a = this.content[r],
                    h = this.scoreFunction(a);
                n > h && (s = r)
            }
            if (e > o) {
                var u = this.content[o],
                    l = this.scoreFunction(u);
                (null === s ? n : h) > l && (s = o)
            }
            if (null === s) break;
            this.content[t] = this.content[s], this.content[s] = i, t = s
        }
    }
}, AStar.astar = {
    init: function (t) {
        for (var e = 0, i = t.length; i > e; e++)
            for (var n = 0, o = t[e].length; o > n; n++) {
                var r = t[e][n];
                r.f = 0, r.g = 0, r.h = 0, r.cost = r.type === GraphNodeType.OPEN ? 1 : 0, r.visited = !1, r.closed = !1, r.parent = null
            }
    },
    heap: function () {
        return new BinaryHeap(function (t) {
            return t.f
        })
    },
    search: function (t, e, i, n, o, r) {
        AStar.astar.init(t), r = r || AStar.astar.turnCost, o = !! o;
        var s = AStar.astar.neighbors(t, i, o),
            a = AStar.astar.heap();
        for (a.push(e); a.size() > 0;) {
            var h = a.pop();
            if (h === i) {
                for (var u = 0, l = h, c = []; l.parent;) {
                    if (u += AStar.astar.isTurn(l.parent, l) ? 1 : 0, u > n) return [];
                    c.push(l), l = l.parent
                }
                return c.push(l), c.reverse()
            }
            h.closed = !0;
            for (var d = AStar.astar.neighbors(t, h, o), p = 0, f = d.length; f > p; p++) {
                var m = d[p];
                if (m === i || !m.closed && !m.isWall()) {
                    var g = AStar.astar.isTurn(h, m) ? 1 : 0,
                        v = h.g + m.cost + g,
                        I = m.visited;
                    (!I || m.g > v) && (m.visited = !0, m.parent = h, m.h = m.h || r(m.pos, i.pos, s), m.g = v, m.f = m.g + m.h, I ? a.rescoreElement(m) : a.push(m))
                }
            }
        }
        return []
    },
    manhattan: function (t, e) {
        var i = Math.abs(e.x - t.x),
            n = Math.abs(e.y - t.y);
        return i + n
    },
    turnCost: function (t, e, i) {
        for (var n = 0, o = 0, r = i.length; r > o; o++) {
            var s = i[o];
            s.isWall() && ((t.x === s.x || t.y === s.y) && (n += 1), (t.x === e.x || t.y === e.y) && (n += 1))
        }
        return n
    },
    neighbors: function (t, e, i) {
        var n = [],
            o = e.x,
            r = e.y;
        return t[o - 1] && t[o - 1][r] && n.push(t[o - 1][r]), t[o + 1] && t[o + 1][r] && n.push(t[o + 1][r]), t[o] && t[o][r - 1] && n.push(t[o][r - 1]), t[o] && t[o][r + 1] && n.push(t[o][r + 1]), i && (t[o - 1] && t[o - 1][r - 1] && n.push(t[o - 1][r - 1]), t[o + 1] && t[o + 1][r - 1] && n.push(t[o + 1][r - 1]), t[o - 1] && t[o - 1][r + 1] && n.push(t[o - 1][r + 1]), t[o + 1] && t[o + 1][r + 1] && n.push(t[o + 1][r + 1])), n
    },
    isTurn: function (t, e) {
        return t.parent ? t.parent.x !== e.x && t.parent.y !== e.y ? !0 : !1 : !1
    }
}, define("astar", function (t) {
    return function () {
        var e;
        return e || t.AStar
    }
}(this)), define("matchline", ["pixi", "absolute", "matchsegment"], function (t, e, i) {
    var n = function (t, e) {
        this.initMatchLine(t, e)
    };
    return n.prototype.initMatchLine = function (t, e) {
        var n, o = t.length,
            r = null;
        for (this.board = e, this.segments = [], n = 0; o > n; n += 1) 0 === n || n === o - 1 ? r = new i("tile") : t[n - 1].row === t[n].row && t[n].row === t[n + 1].row ? r = new i("horz") : t[n - 1].col === t[n].col && t[n].col === t[n + 1].col ? r = new i("vert") : t[n - 1].row === t[n].row - 1 ? r = t[n + 1].col === t[n].col + 1 ? new i("corner_ll") : new i("corner_lr") : t[n - 1].row === t[n].row + 1 ? r = t[n + 1].col === t[n].col + 1 ? new i("corner_ul") : new i("corner_ur") : t[n - 1].col === t[n].col - 1 ? r = t[n + 1].row === t[n].row - 1 ? new i("corner_lr") : new i("corner_ur") : t[n - 1].col === t[n].col + 1 && (r = t[n + 1].row === t[n].row - 1 ? new i("corner_ll") : new i("corner_ul")), r.position.x = t[n].col * t[n].width, r.position.y = t[n].row * t[n].height, 0 === t[n].col ? (r.position.x += .4 * t[n].width, r.underBoard = !0) : t[n].col === this.board.board[0].length - 1 && (r.position.x -= .4 * t[n].width, r.underBoard = !0), 0 === t[n].row ? (r.position.y += .4 * t[n].height, r.underBoard = !0) : t[n].row === this.board.board.length - 1 && (r.position.y -= .4 * t[n].height, r.underBoard = !0), this.segments.push(r)
    }, n.prototype.getFirstSegment = function () {
        return this.segments[0]
    }, n.prototype.getLastSegment = function () {
        return this.segments[this.segments.length - 1]
    }, n.prototype.show = function (t) {
        var e, i = this.segments.length;
        for (e = 1; i - 1 > e; e += 1) this.segments[e].underBoard ? this.board.addChildAt(this.segments[e], 0) : this.board.addChild(this.segments[e]);
        var n = this;
        for (e = 0; i > e; e += 1) n.segments[e].aura.alpha = 0;
        new TWEEN.Tween({
            alpha: 1
        })
            .delay(150)
            .to({
                alpha: 0
            }, 500)
            .easing(TWEEN.Easing.Quadratic.In)
            .onUpdate(function () {
                for (e = 0; i > e; e += 1) n.segments[e].aura.alpha = this.alpha
            })
            .onComplete(function () {
                t && "function" == typeof t && t()
            })
            .start(), new TWEEN.Tween({
                alpha: 1
            })
            .delay(100)
            .to({
                alpha: 0
            }, 500)
            .easing(TWEEN.Easing.Bounce.Out)
            .onUpdate(function () {
                for (e = 0; i > e; e += 1) n.segments[e].beam.alpha = this.alpha
            })
            .onComplete(function () {})
            .start()
    }, n.prototype.hide = function () {
        var t, e = this.segments.length;
        for (t = 1; e - 1 > t; t += 1) this.board.removeChild(this.segments[t])
    }, n
}), define("boardview", ["absolute", "tile", "pixi", "astar", "matchline", "levelconfig", "levelselectbutton"], function (t, e, i, n, o, r, s) {
    var a = function (t) {
        this.highlightOffset = 0, this.ui = t, this.selected = null, this.comboThreshold = r.comboThreshold, this.lastMatchTime = 0, this.comboStreak = 0, this.boardWidth = 0, this.boardHeight = 0, this.powerupsActivated = 0, this.tilesRemaining = 0, this.won = !1, this.winHandled = !1, this.initBoardView()
    };
    return a.constructor = a, a.prototype = Object.create(i.Sprite.prototype), a.prototype.initBoardView = function () {
        var t = i.Texture.fromFrame("transparent.png"),
            e = i.Sprite.fromFrame("tile_DPL_basic.png");
        i.Sprite.call(this, t), this.lastSelection = null, this.currentSelection = null, this.selectionPath = null, this.nextHint = null, this.shimmerTimeout = null, this.tileWidth = e.width, this.tileHeight = e.height, this.tileSpace = 0, this.matchLine = new i.DisplayObjectContainer, this.addChild(this.matchLine)
    }, a.prototype.configLevel = function (t) {
        var i, n, o, r, s, a, h, u, l = [];
        for (this.level = t, this.levelConfig = t.config, this.powerupsActivated = 0, h = t.config.layout.length, u = 0 === h ? 0 : (t.config.layout[0].length + 1) / 2, this.board = [], o = 0; h > o; o += 1) {
            for (s = [], r = 0; u > r; r += 1) s.push(new e(o, r, 0)), "1" === t.config.layout[o].charAt(2 * r) && l.push({
                row: o,
                col: r
            });
            this.board.push(s)
        }
        if (0 !== l.length % 2) throw window.alert("Problem with level config. Must have an even number of tiles!"), "Problem with level config. Must have an even number of tiles!";
        l.sort(function () {
            return .5 > Math.random() ? -1 : 1
        });
        var c = t.config.powerups.time,
            d = t.config.powerups.shuffle,
            p = t.config.powerups.hint;
        for (i = 0, n = l.length; n > i; i += 2) c > 0 ? (this.addTile(l[i].row, l[i].col, "time"), this.addTile(l[i + 1].row, l[i + 1].col, "time"), c--) : d > 0 ? (this.addTile(l[i].row, l[i].col, "shuffle"), this.addTile(l[i + 1].row, l[i + 1].col, "shuffle"), d--) : p > 0 ? (this.addTile(l[i].row, l[i].col, "hint"), this.addTile(l[i + 1].row, l[i + 1].col, "hint"), p--) : (a = this.getRandomEntry(t.config.tileTypes), this.addTile(l[i].row, l[i].col, a), this.addTile(l[i + 1].row, l[i + 1].col, a));
        this._dumpBoard(), this.boardWidth = u * (this.tileWidth + this.tileSpace) - this.tileSpace, this.boardHeight = h * (this.tileHeight + this.tileSpace) - this.tileSpace, this.tilesRemaining = l.length, this.won = !1, this.winHandled = !1, this.nextHint = this.getMove(), this.scheduleShimmerHint()
    }, a.prototype.addTile = function (t, i, n) {
        var o = new e(t, i, n, this.tileClicked.bind(this));
        this.board[t][i] = o, o.position.y -= this.ui.height, this.addChild(o)
    }, a.prototype.animateIntro = function (e) {
        var n, o, r = this.getNumRows(),
            a = this.getNumCols(),
            h = new s(this.level.levelNum - 1, this.level.config, !1, 0, function () {});
        h.stateButton.setInteractive(!1), h.alpha = 0, h.position.x = (this.ui.width - h.width) / 2 - this.position.x, h.position.y = (this.ui.height - h.height) / 2, this.addChild(h);
        var u = i.Sprite.fromFrame("title_READY.png");
        u.anchor.x = .5, u.anchor.y = .5, u.position.x = this.ui.width / 2 - this.position.x, u.position.y = this.ui.height / 4, u.alpha = 0, this.addChild(u);
        var l = i.Sprite.fromFrame("title_GO.png");
        l.anchor.x = .5, l.anchor.y = .5, l.position.x = this.ui.width / 2 - this.position.x, l.position.y = this.ui.height / 2, l.scale.x = l.scale.y = .1, t.AudioManager.playSound("ready"), t.TweenUtils.fadeIn([u, h], {
            duration: 200
        }, function () {
            setTimeout(function () {
                for (this.removeChild(h), this.removeChild(u), n = 0; r > n; n += 1)
                    for (o = 0; a > o; o += 1) this.board[n][o] && this.board[n][o].dropIn(n, o);
                t.AudioManager.playSound("load_tiles", null, 500), setTimeout(function () {
                    this.addChild(l), t.AudioManager.playSound("go"), t.TweenUtils.bounceIn(l, {
                        duration: 1e3
                    }, function () {
                        for (t.MusicManager.playMusic(this.level.music), this.removeChild(l), n = 0; r > n; n += 1)
                            for (o = 0; a > o; o += 1) this.board[n][o] && this.board[n][o].setInteractive(!0);
                        e()
                    }.bind(this))
                }.bind(this), 1e3)
            }.bind(this), 2e3)
        }.bind(this))
    }, a.prototype.getRandomEntry = function (t) {
        return t[Math.floor(t.length * Math.random())]
    }, a.prototype.getTileAt = function (t, e) {
        return this.board[t][e]
    }, a.prototype.setSelection = function (e, i) {
        var o, s, a = !1;
        if (this.currentSelection = this.board[e][i], this.lastSelection && this.currentSelection !== this.lastSelection && this.lastSelection.kind === this.currentSelection.kind) {
            var h = new n.Graph(this.board),
                u = n.astar.search(h.nodes, h.nodes[e][i], h.nodes[this.lastSelection.row][this.lastSelection.col], r.maxPathTurns);
            if (u.length > 0) {
                for (a = !0, t.Debug.log("path: "), t.Debug.log(u), this.selectionPath = [], o = 0, s = u.length; s > o; o += 1) this.selectionPath.push(this.board[u[o].x][u[o].y]);
                this.tilesRemaining -= 2, this.won = 0 >= this.getNumPiecesRemaining(), this.drawPath(this.selectionPath), this._dumpBoard()
            }
        }
        return a ? this.lastSelection = this.currentSelection = null : (this.lastSelection = this.currentSelection, this.currentSelection = null, this.selectionPath = null), a
    }, a.prototype.generateNextHint = function () {
        this.nextHint = this.getMove(), this.nextHint || this.won || this.ui.noMoves()
    }, a.prototype.drawPath = function (t) {
        var e = t[0],
            i = t[t.length - 1],
            n = new o(t, this);
        e.burnout(n.getFirstSegment()), i.burnout(n.getLastSegment()), n.show(function () {
            setTimeout(function () {
                n.hide();
                var t = 2,
                    o = function () {
                        t -= 1, 0 !== t || this.winHandled || (this.won ? (this.winHandled = !0, setTimeout(function () {
                            this.ui.win()
                        }.bind(this), 1100)) : (this.generateNextHint(), this.scheduleShimmerHint()))
                    };
                this.removeTile(e.row, e.col, o.bind(this)), this.removeTile(i.row, i.col, o.bind(this))
            }.bind(this), 0)
        }.bind(this))
    }, a.prototype.removeTile = function (i, n, o) {
        var s = this.board[i][n];
        this.board[i][n] = new e(i, n, 0), setTimeout(function () {
            if (this.removeChild(s), this.addChild(s), s.isPowerup) {
                if (this.powerupsActivated += 1, 0 === this.powerupsActivated % 2) switch (s.kind) {
                case "time":
                    t.AudioManager.playSound("power_time");
                    break;
                case "hint":
                    t.AudioManager.playSound("power_hint");
                    break;
                case "shuffle":
                    t.AudioManager.playSound("power_shuffle")
                }
                var e = this.ui.gameScreen.getPowerupTargetPosition(s.kind);
                e.x -= this.position.x, e.y -= this.position.y, s.animateTo(e.x, e.y, 0, 500, TWEEN.Easing.Linear.None, TWEEN.Interpolation.Bezier, function () {
                    switch (s.kind) {
                    case "time":
                        this.level.addTime(r.timePowerupSeconds / 2), 0 === this.powerupsActivated % 2 && this.showFlash("bonus_time_10.png", e.x, e.y);
                        break;
                    case "hint":
                        this.level.availablePowerups.hint += .5;
                        break;
                    case "shuffle":
                        this.level.availablePowerups.shuffle += .5
                    }
                    0 === this.powerupsActivated % 2 && this.ui.gameScreen.showPowerupBling(s.kind), this.ui.gameScreen.updatePowerupCounts(), this.removeChild(s)
                }.bind(this))
            } else this.removeChild(s);
            this.doCollapse(i, n, o)
        }.bind(this), 0)
    }, a.prototype.doCollapse = function (e, i, n) {
        var o = 0,
            r = 0,
            s = !0,
            a = this.board.length,
            h = a > 0 ? this.board[0].length : 0,
            u = 0;
        switch (this.levelConfig.collapseMode) {
        case "down":
            o = a - 2, r = 1;
            break;
        case "up":
            o = 1, r = a - 2;
            break;
        case "vert_exp":
            a / 2 > e ? (o = 1, r = a / 2 - 1) : (o = a - 2, r = a / 2);
            break;
        case "vert_imp":
            a / 2 > e ? (o = a / 2 - 1, r = 1) : (o = a / 2, r = a - 2);
            break;
        case "right":
            o = h - 2, r = 1, s = !1;
            break;
        case "left":
            o = 1, r = h - 2, s = !1;
            break;
        case "horz_exp":
            h / 2 > i ? (o = 1, r = h / 2 - 1) : (o = h - 2, r = h / 2), s = !1;
            break;
        case "horz_imp":
            h / 2 > i ? (o = h / 2 - 1, r = 1) : (o = h / 2, r = h - 2), s = !1
        }
        if (s) {
            if (u = this.collapseCol(i, o, r, n), u > 0)
                for (var l = 250, c = 0; u > c; c++) t.AudioManager.playSound("tile_fall_" + (c + 1), null, l), l += 40
        } else if (u = this.collapseRow(e, o, r, n), u > 0)
            for (var l = 250, c = 0; u > c; c++) t.AudioManager.playSound("tile_slide_" + (c + 1), null, l), l += 40
    }, a.prototype.collapseCol = function (t, i, n, o) {
        for (var r, s, a = i > n ? -1 : 1, h = i, u = [], l = 0; h - a !== n;) this.board[h][t] && 0 !== this.board[h][t].kind && u.push(this.board[h][t]), h += a;
        for (r = 0, s = u.length, h = i; s > r;) this.board[u[r].row][u[r].col] = new e(u[r].row, u[r].col, 0), this.board[h][t] = u[r], this.board[h][t].updateLocation(h, t, a) && l++, h += a, r += 1;
        return o(), l
    }, a.prototype.collapseRow = function (t, i, n, o) {
        for (var r, s, a = i > n ? -1 : 1, h = i, u = [], l = 0; h - a !== n;) this.board[t][h] && 0 !== this.board[t][h].kind && u.push(this.board[t][h]), h += a;
        for (r = 0, s = u.length, h = i; s > r;) this.board[u[r].row][u[r].col] = new e(u[r].row, u[r].col, 0), this.board[t][h] = u[r], this.board[t][h].updateLocation(t, h, a) && l++, h += a, r += 1;
        return o(), l
    }, a.prototype.getNumPiecesRemaining = function () {
        return this.tilesRemaining
    }, a.prototype.getCurrentSelection = function () {
        return this.currentSelection
    }, a.prototype.getLastSelection = function () {
        return this.lastSelection
    }, a.prototype.getSelectionPath = function () {
        return this.selectionPath
    }, a.prototype._dumpBoard = function () {
        var e, i, n, o = this.board.length,
            r = o > 0 ? this.board[0].length : 0;
        for (t.Debug.log("----------------"), e = 0; o > e; e += 1) {
            for (n = "", i = 0; r > i; i += 1) n += this.board[e][i] ? "string" == typeof this.board[e][i].kind ? this.board[e][i].kind.substring(0, 2) + " " : (10 > this.board[e][i].kind ? "0" : "") + this.board[e][i].kind + " " : "XX ";
            t.Debug.log(n)
        }
    }, a.prototype.tileClicked = function (e, i, n) {
        var o;
        if (t.Debug.log("tile tapped at " + e + ", " + i), n !== this.selected && !n.burning) {
            if (this.selected && this.selected.setSelected(!1), this.setSelection(e, i)) {
                t.Debug.log("match!");
                var s = +new Date;
                s - this.lastMatchTime < this.comboThreshold ? this.comboStreak++ : this.comboStreak = 0, this.lastMatchTime = s;
                var a = Math.min(r.comboPoints.length - 1, this.comboStreak);
                this.level.score += r.pointsPerMatch, this.level.comboBonus += r.comboPoints[a], a > 0 && this.showComboAccolade(n, a), setTimeout(function () {
                    this.won ? t.AudioManager.playSound("last_match_sound") : t.AudioManager.playSound("match_" + (1 + Math.min(13, this.comboStreak)))
                }.bind(this), 100), o = this.getSelectionPath(), o && (this.selected = null)
            } else t.Debug.log("no match"), n.setSelected(!0), this.selected = n;
            t.AudioManager.playSound("tile_select")
        }
    }, a.prototype.showComboAccolade = function (t, e) {
        var i = r.comboPoints[e],
            n = t.position.x + t.width / 2,
            o = t.position.y + t.height / 2;
        1 === e ? this.showFlash("combo_words_01.png", n, o) : 4 === e ? this.showFlash("combo_words_02.png", n, o) : 9 === e ? this.showFlash("combo_words_03.png", n, o) : e >= 13 && this.showFlash("combo_words_04.png", n, o), setTimeout(function () {
            this.showFlash("combo_points_" + i + ".png", n, o)
        }.bind(this), 600)
    }, a.prototype.getTileCenter = function (t) {
        return {
            x: t.y * this.tileWidth,
            y: t.x * this.tileHeight
        }
    }, a.prototype.getBoardWidth = function () {
        return this.boardWidth
    }, a.prototype.getBoardHeight = function () {
        return this.boardHeight
    }, a.prototype.getNumRows = function () {
        return this.board.length
    }, a.prototype.getNumCols = function () {
        return this.board.length > 0 ? this.board[0].length : 0
    }, a.prototype.getMove = function () {
        var t, e, i, o, r, s = this.getNumRows(),
            a = this.getNumCols(),
            h = [];
        for (t = 0; s > t; t += 1)
            for (e = 0; a > e; e += 1) this.board[t][e] && 0 !== this.board[t][e].kind && h.push(this.board[t][e]);
        h.sort(function () {
            return .5 > Math.random() ? -1 : 1
        });
        var u = new n.Graph(this.board);
        for (i = 0, r = h.length; r > i; i += 1)
            for (o = i + 1; r > o; o += 1)
                if (i !== o && h[i].kind === h[o].kind && this.checkLink(u, h[i], h[o])) return {
                    from: h[i],
                    to: h[o]
                };
        return null
    }, a.prototype.checkLink = function (t, e, i) {
        var o = n.astar.search(t.nodes, t.nodes[e.row][e.col], t.nodes[i.row][i.col], r.maxPathTurns);
        return o.length > 0
    }, a.prototype.showHint = function () {
        this.nextHint && (this.scheduleShimmerHint(), this.nextHint.from.showHint(), this.nextHint.to.showHint(), t.AudioManager.playSound("hint"))
    }, a.prototype.showShimmer = function () {
        this.nextHint && (this.nextHint.from.showShimmer(), this.nextHint.to.showShimmer()), this.scheduleShimmerHint()
    }, a.prototype.scrambleTiles = function () {
        var e, i, n, o, r = this.getNumRows(),
            s = this.getNumCols(),
            a = [];
        for (e = 0; r > e; e += 1)
            for (i = 0; s > i; i += 1) this.board[e][i] && 0 !== this.board[e][i].kind && a.push(this.board[e][i]);
        if (a.sort(function () {
            return .5 > Math.random() ? -1 : 1
        }), a.length > 4)
            for (n = 0, o = a.length; o - 1 > n; n += 2) this.swapTiles(a[n], a[n + 1]);
        else this.swapTiles(a[0], a[1]);
        t.AudioManager.playSound("shuffle"), this.generateNextHint(), this.scheduleShimmerHint()
    }, a.prototype.swapTiles = function (t, e) {
        var i = t.row,
            n = t.col,
            o = e.row,
            r = e.col;
        this.board[i][n] = e, this.board[i][n].updateLocation(i, n), this.board[o][r] = t, this.board[o][r].updateLocation(o, r)
    }, a.prototype.handleLevelFailed = function () {
        var t, e, i = this.getNumRows(),
            n = this.getNumCols();
        for (t = 0; i > t; t += 1)
            for (e = 0; n > e; e += 1)
                if (this.board[t][e] && 0 !== this.board[t][e].kind) {
                    var o = this.board[t][e];
                    this.removeChild(o)
                }
    }, a.prototype.cleanup = function () {
        t.MusicManager.stopMusic()
    }, a.prototype.showFlash = function (t, e, n) {
        var o = i.Sprite.fromFrame(t);
        o.anchor.x = o.anchor.y = .5, o.position.x = e, o.position.y = n, this.addChild(o), 0 > o.position.x - o.width / 2 ? o.position.x = 1.1 * (o.width / 2) : o.position.x + o.width / 2 > this.ui.width && (o.position.x = this.ui.width - 1.1 * (o.width / 2));
        var r = this;
        new TWEEN.Tween({
            y: o.position.y,
            alpha: o.alpha
        })
            .to({
                y: n - this.ui.height / 10,
                alpha: 0
            }, 1e3)
            .easing(TWEEN.Easing.Cubic.In)
            .onUpdate(function () {
                o.position.y = this.y, o.alpha = this.alpha
            })
            .onComplete(function () {
                r.removeChild(o)
            })
            .start()
    }, a.prototype.scheduleShimmerHint = function () {
        this.shimmerTimeout && clearTimeout(this.shimmerTimeout), this.shimmerTimeout = setTimeout(function () {
            this.showShimmer()
        }.bind(this), r.shimmerHintInterval)
    }, a.prototype.handlePause = function () {
        t.MusicManager.stopMusic()
    }, a.prototype.handleResume = function () {
        t.MusicManager.playMusic(this.level.music), this.scheduleShimmerHint()
    }, a
}), define("howtoplay", ["pixi", "absolute"], function (t, e) {
    var i = function (t, e, i) {
        this.initHowToPlay(t, e, i)
    };
    return i.prototype = Object.create(e.Screen.prototype), i.prototype.initHowToPlay = function (i, n, o) {
        e.Screen.call(this), this.board = i, this.ui = n, this.game = o, this.title = t.Sprite.fromFrame("title_howtoplay.png"), this.title.anchor.x = .5, this.title.position.x = this.ui.width / 2, this.title.position.y = e.Coords.y(50), this.addChild(this.title);
        var r = t.Sprite.fromFrame("HTP_move_1.png");
        r.position.x = e.Coords.x(150), r.position.y = e.Coords.y(200), this.addChild(r);
        var s = t.Sprite.fromFrame("HTP_move_2.png");
        s.position.x = e.Coords.x(825), s.position.y = e.Coords.y(200), this.addChild(s);
        var a = t.Sprite.fromFrame("HTP_move_3.png");
        a.position.x = e.Coords.x(150), a.position.y = e.Coords.y(690), this.addChild(a);
        var h = t.Sprite.fromFrame("HTP_move_4.png");
        h.position.x = e.Coords.x(825), h.position.y = e.Coords.y(690), this.addChild(h);
        var u = t.Sprite.fromFrame("HTP_power_1.png");
        u.position.x = e.Coords.x(20), u.position.y = e.Coords.y(1210), this.addChild(u);
        var l = t.Sprite.fromFrame("HTP_power_2.png");
        l.position.x = e.Coords.x(520), l.position.y = e.Coords.y(1210), this.addChild(l);
        var c = t.Sprite.fromFrame("HTP_power_3.png");
        c.position.x = e.Coords.x(1020), c.position.y = e.Coords.y(1210), this.addChild(c), this.addButton("button_game_play", e.Coords.x(1280), e.Coords.y(1500), function () {
            this.game.resume(), this.ui.hideModal()
        }.bind(this), !0)
    }, i.prototype.onShow = function () {
        e.Screen.prototype.onShow.call(this)
    }, i.prototype.onHide = function () {
        e.Screen.prototype.onHide.call(this)
    }, i
}), define("optionsscreen", ["pixi", "absolute", "howtoplay"], function (t, e, i) {
    var n = function (t, e, i) {
        this.initOptionsScreen(t, e, i)
    };
    return n.prototype = Object.create(e.Screen.prototype), n.prototype.initOptionsScreen = function (t, n, o) {
        e.Screen.call(this), this.board = t, this.ui = n, this.game = o, this.howToPlay = null, this.addButton("button_mainmenu", e.Coords.x(180), e.Coords.y(220), function () {
            this.ui.hideModal(), this.game.quit()
        }.bind(this)), this.addButton("button_menu_replaythis", e.Coords.x(610), e.Coords.y(220), function () {
            this.ui.hideModal(), this.game.playLevel(this.game.currentLevelIndex)
        }.bind(this)), this.addButton("button_options_howtoplay", e.Coords.x(1060), e.Coords.y(220), function () {
            this.howToPlay || (this.howToPlay = new i(this.board, this.ui, this.game), this.howToPlay.position.x = this.position.x, this.howToPlay.position.y = this.position.y), this.ui.hideModal(), this.ui.showModal(this.howToPlay)
        }.bind(this)), this.addButton("button_levelselect", e.Coords.x(180), e.Coords.y(650), function () {
            setTimeout(function () {
                this.ui.hideModal(), this.game.selectLevel()
            }.bind(this), 0)
        }.bind(this)), e.AudioManager.usingWebAudio() && (this.muteMusicButton = this.addToggleButton("button_options_music", e.Coords.x(610), e.Coords.y(650), function () {
            e.MusicManager.setMuted(!e.MusicManager.isMuted())
        }, !e.MusicManager.isMuted())), this.muteSfxButton = this.addToggleButton("button_options_sfx", e.Coords.x(1060), e.Coords.y(650), function () {
            e.AudioManager.setSfxEnabled(!e.AudioManager.isSfxEnabled())
        }, e.AudioManager.isSfxEnabled()), this.addButton("button_game_play", e.Coords.x(1280), e.Coords.y(1500), function () {
            this.game.resume(), this.ui.hideModal()
        }.bind(this), !0)
    }, n.prototype.onShow = function () {
        e.Screen.prototype.onShow.call(this), e.MusicManager.playMusic("menu_bg_music"), e.AudioManager.usingWebAudio() && this.muteMusicButton.setEnabled(!e.MusicManager.isMuted()), this.muteSfxButton.setEnabled(e.AudioManager.isSfxEnabled())
    }, n.prototype.onHide = function () {
        e.Screen.prototype.onHide.call(this)
    }, n
}), define("scoresummary", ["pixi", "absolute", "levelconfig"], function (t, e, i) {
    var n = function (t, e, i) {
        this.initScoreSummary(t, e, i)
    };
    return n.prototype = Object.create(e.Screen.prototype), n.prototype.initScoreSummary = function (i, n, o) {
        e.Screen.call(this), this.board = i, this.ui = n, this.game = o, this.level = null, this.title = t.Sprite.fromFrame("title_greatjob.png"), this.title.anchor.x = this.title.anchor.y = .5, this.title.position.x = this.ui.width / 2, this.title.position.y = this.ui.height / 8, this.addChild(this.title), this.menuButton = this.addButton("button_levelselect", e.Coords.x(180), e.Coords.y(1300), function () {
            this.ui.hideModal(), this.game.selectLevel()
        }.bind(this)), this.replayButton = this.addButton("button_menu_replaythis", e.Coords.x(610), e.Coords.y(1300), function () {
            e.MusicManager.stopMusic(), this.ui.hideModal(), this.game.playLevel(this.game.currentLevelIndex)
        }.bind(this)), this.playNextButton = this.addButton("button_playnext", e.Coords.x(1060), e.Coords.y(1300), function () {
            e.MusicManager.stopMusic(), this.ui.hideModal(), this.game.playNextLevel()
        }.bind(this)), this.menuButton.visible = this.replayButton.visible = this.playNextButton.visible = !1;
        var r = 2,
            s = .9 * this.ui.width,
            a = this.ui.width / 2,
            h = e.Coords.y(480),
            u = t.Sprite.fromFrame("summary_titles_score.png");
        u.position.x = a - u.width, u.position.y = h, this.addChild(u), this.scoreText = new e.DigitLabel(10, .6), this.scoreText.position.x = s - this.scoreText.width, this.scoreText.position.y = h + r, this.addChild(this.scoreText), h += e.Coords.y(160);
        var l = t.Sprite.fromFrame("summary_titles_time.png");
        l.position.x = a - l.width, l.position.y = h, this.addChild(l), this.timeText = new e.DigitLabel(10, .6), this.timeText.position.x = s - this.timeText.width, this.timeText.position.y = h + r, this.addChild(this.timeText), h += e.Coords.y(160);
        var c = t.Sprite.fromFrame("summary_titles_combo.png");
        c.position.x = a - c.width, c.position.y = h, this.addChild(c), this.comboText = new e.DigitLabel(10, .6), this.comboText.position.x = s - this.comboText.width, this.comboText.position.y = h + r, this.addChild(this.comboText), h += e.Coords.y(240);
        var d = t.Sprite.fromFrame("summary_titles_total.png");
        d.position.x = e.Coords.x(30), d.position.y = h, this.addChild(d), this.totalText = new e.DigitLabel(10), this.totalText.position.x = s - this.totalText.width, this.totalText.position.y = h + 2 * r, this.addChild(this.totalText)
    }, n.prototype.setLevel = function (t) {
        this.level = t
    }, n.prototype.update = function () {
        var t, n, o, r = .9 * this.ui.width;
        if (this.level) {
            this.scoreText.setText(e.TextUtils.formatInt(this.level.score)), this.scoreText.position.x = r - this.scoreText.width, n = Math.floor(i.maxTimeBonus * (this.level.timeRemaining / this.level.config.timeGoal)), this.timeText.setText(e.TextUtils.formatInt(n)), this.timeText.position.x = r - this.timeText.width, o = this.level.comboBonus, this.comboText.setText(e.TextUtils.formatInt(o)), this.comboText.position.x = r - this.comboText.width, t = this.level.score + n + o, this.totalText.setText(e.TextUtils.formatInt(t)), this.totalText.position.x = r - this.totalText.width + e.Coords.x(80);
            var s = e.GameConfig.getVal("completedLevels");
            s.length < this.level.levelNum - 1 ? s.push({
                score: t
            }) : s[this.level.levelNum - 1] = {
                score: t
            }, e.GameConfig.setVal("completedLevels", s)
        }
    }, n.prototype.onShow = function () {
        e.Screen.prototype.onShow.call(this), e.MusicManager.stopMusic(), e.AudioManager.playSound("win"), this.title.scale.x = this.title.scale.y = .1, e.TweenUtils.bounceIn(this.title, {
            duration: 1e3
        }), setTimeout(function () {
            this.menuButton.visible = this.replayButton.visible = this.playNextButton.visible = !0, this.menuButton.alpha = this.replayButton.alpha = this.playNextButton.alpha = 0, e.TweenUtils.fadeIn([this.menuButton, this.replayButton, this.playNextButton], {
                duration: 500
            }), e.MusicManager.playMusic("menu_bg_music")
        }.bind(this), 3e3)
    }, n.prototype.onHide = function () {
        e.Screen.prototype.onHide.call(this), this.menuButton.visible = this.replayButton.visible = this.playNextButton.visible = !1
    }, n
}), define("powerupcounter", ["pixi", "absolute"], function (t, e) {
    var i = function () {
        this.initPowerupCounter()
    };
    return i.constructor = i, i.prototype = Object.create(t.Sprite.prototype), i.prototype.initPowerupCounter = function () {
        t.Sprite.call(this, t.Texture.fromFrame("button_game_counter_1.png")), this.count = 0, this.countDisplay = new e.DigitLabel(2, .35), this.countDisplay.position.x = (this.width - this.countDisplay.width) / 2, this.countDisplay.position.y = .25 * this.height, this.addChild(this.countDisplay)
    }, i.prototype.setCount = function (t) {
        this.count = t, this.countDisplay.setText(t + ""), this.countDisplay.position.x = (this.width - this.countDisplay.width) / 2
    }, i
}), define("levelfailedscreen", ["pixi", "absolute", "levelconfig"], function (t, e) {
    var i = function (t, e, i) {
        this.initLevelFailedScreen(t, e, i)
    };
    return i.prototype = Object.create(e.Screen.prototype), i.prototype.initLevelFailedScreen = function (i, n, o) {
        e.Screen.call(this), this.ui = n, this.game = o, this.menuButton = this.addButton("button_levelselect", .25 * n.width, e.Coords.y(1300), function () {
            this.ui.hideModal(), this.game.selectLevel()
        }.bind(this)), this.replayButton = this.addButton("button_menu_replaythis", .58 * n.width, e.Coords.y(1300), function () {
            e.MusicManager.stopMusic(), this.ui.hideModal(), this.game.playLevel(this.game.currentLevelIndex)
        }.bind(this)), this.menuButton.visible = !1, this.replayButton.visible = !1, this.outOfTime = t.Sprite.fromFrame("title_outoftime.png"), this.outOfTime.anchor.x = this.outOfTime.anchor.y = .5, this.outOfTime.position.x = n.width / 2, this.outOfTime.position.y = n.height / 4, this.addChild(this.outOfTime)
    }, i.prototype.onShow = function () {
        e.Screen.prototype.onShow.call(this), e.MusicManager.stopMusic(), e.AudioManager.playSound("times_up"), this.outOfTime.scale.x = this.outOfTime.scale.y = .1, e.TweenUtils.bounceIn(this.outOfTime, {
            duration: 1e3
        }), setTimeout(function () {
            e.MusicManager.playMusic("menu_bg_music"), this.menuButton.visible = !0, this.replayButton.visible = !0, this.menuButton.alpha = this.replayButton.alpha = 0, e.TweenUtils.fadeIn([this.menuButton, this.replayButton], {
                duration: 500
            })
        }.bind(this), 2e3)
    }, i.prototype.onHide = function () {
        this.menuButton.visible = !1, this.replayButton.visible = !1
    }, i
}), define("levelstartsequence", ["pixi", "absolute", "levelselectbutton"], function (t, e, i) {
    var n = function (t, e, i, n, o) {
        this.initLevelStartSequence(t, e, i, n, o)
    };
    return n.prototype = Object.create(e.Screen.prototype), n.prototype.initLevelStartSequence = function (t, i, n, o, r) {
        e.Screen.call(this), this.ui = i, this.game = n, this.level = o, this.onComplete = r
    }, n.prototype.onShow = function () {
        e.Screen.prototype.onShow.call(this);
        var n = new i(this.level.levelNum - 1, this.level.config, !1, 0, function () {});
        n.alpha = 0, n.position.x = (this.ui.width - n.width) / 2, n.position.y = (.875 * this.ui.height - n.height) / 2, this.addChild(n);
        var o = t.Sprite.fromFrame("title_READY.png");
        o.anchor.x = .5, o.anchor.y = .5, o.position.x = this.ui.width / 2, o.position.y = .875 * this.ui.height / 2, o.scale.x = o.scale.y = .1;
        var r = t.Sprite.fromFrame("title_GO.png");
        r.anchor.x = .5, r.anchor.y = .5, r.position.x = this.ui.width / 2, r.position.y = .875 * this.ui.height / 2, r.scale.x = r.scale.y = .1, e.TweenUtils.fadeIn(n, {
            duration: 200
        }, function () {
            setTimeout(function () {
                this.removeChild(n), this.addChild(o), e.TweenUtils.bounceIn(o, {
                    duration: 1e3
                }, function () {
                    this.removeChild(o), this.addChild(r), e.TweenUtils.bounceIn(r, {
                        duration: 1e3
                    }, function () {
                        e.MusicManager.playMusic(this.level.music), this.removeChild(r), this.onComplete()
                    }.bind(this))
                }.bind(this))
            }.bind(this), 2e3)
        }.bind(this))
    }, n.prototype.onHide = function () {}, n
}), define("gamescreen", ["pixi", "absolute", "timer", "levelindicator", "boardview", "optionsscreen", "scoresummary", "powerupcounter", "levelfailedscreen", "levelstartsequence"], function (t, e, i, n, o, r, s, a, h) {
    var u = function (t, e) {
        this.initGameScreen(t, e)
    };
    return u.prototype = Object.create(e.Screen.prototype), u.prototype.initGameScreen = function (o, u) {
        e.Screen.call(this);
        var l = this;
        this.ui = o, this.game = u, this.timeWarningPlaying = !1;
        var c = t.Sprite.fromFrame("stage_border.png");
        this.addChild(c), this.timer = new i(o), this.timer.position.x = e.Coords.x(24), this.timer.position.y = e.Coords.y(1752), this.addChild(this.timer), this.levelIndicator = new n(o), this.levelIndicator.position.x = e.Coords.x(600), this.levelIndicator.position.y = e.Coords.y(1772), this.addChild(this.levelIndicator), this.optionsMenu = new r(this, this.ui, this.game), this.optionsMenu.position.x = e.Coords.x(18), this.optionsMenu.position.y = e.Coords.y(18), this.scoreSummary = new s(this, this.ui, this.game), this.scoreSummary.position.x = e.Coords.x(16), this.scoreSummary.position.y = e.Coords.y(96), this.levelFailed = new h(this, this.ui, this.game), this.levelFailed.position.x = e.Coords.x(16), this.levelFailed.position.y = e.Coords.y(96), this.optionsButton = new e.Button(t.Texture.fromFrame("button_game_options_1.png"), t.Texture.fromFrame("button_small_overlay.png"), function () {
            e.Debug.log("Options pressed!"), l.game.pause(), l.ui.showModal(l.optionsMenu)
        }), this.optionsButton.position.x = e.Coords.x(872), this.optionsButton.position.y = e.Coords.y(1800), this.addChild(this.optionsButton), this.scrambleButton = new e.Button(t.Texture.fromFrame("button_game_shuffle_1.png"), t.Texture.fromFrame("button_game_shuffle_2.png"), function () {
            l.level.availablePowerups.shuffle > 0 && (e.Debug.log("Scramble pressed!"), l.level.availablePowerups.shuffle--, l.boardView.scrambleTiles(), l.updatePowerupCounts(), l.scrambleButton.setActive(!1), setTimeout(function () {
                l.scrambleButton.setActive(!0)
            }, 1e3))
        }, !0), this.scrambleButton.position.x = e.Coords.x(1032), this.scrambleButton.position.y = e.Coords.y(1730), this.addChild(this.scrambleButton), this.scrambleCount = new a, this.scrambleCount.position.x = this.scrambleButton.position.x + .15 * this.scrambleButton.width, this.scrambleCount.position.y = this.scrambleButton.position.y + this.scrambleButton.height - this.scrambleCount.height, this.addChild(this.scrambleCount), this.scrambleCount.setCount(0), this.hintButton = new e.Button(t.Texture.fromFrame("button_game_hint_1.png"), t.Texture.fromFrame("button_game_hint_2.png"), function () {
            l.level.availablePowerups.hint > 0 && (e.Debug.log("Hint pressed!"), l.level.availablePowerups.hint--, l.boardView.showHint(), l.updatePowerupCounts(), l.hintButton.setActive(!1), setTimeout(function () {
                l.hintButton.setActive(!0)
            }, 1e3))
        }, !0), this.hintButton.position.x = e.Coords.x(1272), this.hintButton.position.y = e.Coords.y(1730), this.addChild(this.hintButton), this.hintCount = new a, this.hintCount.position.x = this.hintButton.position.x + .15 * this.hintButton.width, this.hintCount.position.y = this.hintButton.position.y + this.hintButton.height - this.hintCount.height, this.addChild(this.hintCount), this.hintCount.setCount(0)
    }, u.prototype.showScoreSummary = function () {
        this.scoreSummary.update(), this.enableControls(!1), this.ui.showModal(this.scoreSummary)
    }, u.prototype.configLevel = function (t) {
        this.level = t, this.enableControls(!1), this.updatePowerupCounts(), this.timer.setMaxTime(t.config.timeGoal), this.timer.setTime(this.level.timeRemaining), this.levelIndicator.setLevel(t.levelNum), this.scoreSummary.setLevel(this.level), this.boardView && (this.boardView.cleanup(), this.removeChild(this.boardView)), this.boardView = new o(this.ui), this.boardView.configLevel(t), this.boardView.position.x = (this.ui.width - this.boardView.getBoardWidth()) / 2, this.boardView.position.y = (.875 * this.ui.height - this.boardView.getBoardHeight()) / 2, this.addChild(this.boardView), setTimeout(function () {
            this.boardView.animateIntro(function () {
                setTimeout(function () {
                    this.levelTimer = setTimeout(this.updateLevelTime.bind(this), 1e3), this.enableControls(!0)
                }.bind(this), 600)
            }.bind(this))
        }.bind(this), 250)
    }, u.prototype.enableControls = function (t) {
        this.optionsButton.setActive(t), this.scrambleButton.setActive(t), this.hintButton.setActive(t)
    }, u.prototype.updateLevelTime = function () {
        this.level.timeRemaining = this.level.timeRemaining - 1, this.timer.setTime(this.level.timeRemaining), this.level.timeRemaining > 10 && this.timeWarningPlaying && (e.AudioManager.stopSound("run_out_of_time"), this.timeWarningPlaying = !1), 10 === this.level.timeRemaining && e.AudioManager.usingWebAudio() && (e.AudioManager.playSound("run_out_of_time"), this.timeWarningPlaying = !0), 0 >= this.level.timeRemaining ? (this.levelTimer = null, this.boardView.won || setTimeout(function () {
            this.boardView.handleLevelFailed(), this.enableControls(!1), this.ui.showModal(this.levelFailed)
        }.bind(this), 0)) : this.levelTimer = setTimeout(this.updateLevelTime.bind(this), 1e3)
    }, u.prototype.handleNoMoves = function () {
        var e = t.Sprite.fromFrame("title_outofmatches.png");
        e.position.x = (this.ui.width - e.width) / 2, e.position.y = (this.ui.height / 2 - e.height) / 2, this.addChild(e), setTimeout(function () {
            this.removeChild(e), this.boardView.scrambleTiles()
        }.bind(this), 1e3)
    }, u.prototype.updatePowerupCounts = function () {
        this.level.availablePowerups && (void 0 !== this.level.availablePowerups.hint && this.hintCount.setCount(Math.round(this.level.availablePowerups.hint)), void 0 !== this.level.availablePowerups.shuffle && this.scrambleCount.setCount(Math.round(this.level.availablePowerups.shuffle)))
    }, u.prototype.getPowerupTargetPosition = function (t) {
        var e = {
            x: 0,
            y: 0
        };
        switch (t) {
        case "time":
            e.x = this.timer.position.x + this.timer.width / 2, e.y = this.timer.position.y + this.timer.height / 2;
            break;
        case "hint":
            e.x = this.hintButton.position.x + this.hintButton.width / 2, e.y = this.hintButton.position.y + this.hintButton.height / 2;
            break;
        case "shuffle":
            e.x = this.scrambleButton.position.x + this.scrambleButton.width / 2, e.y = this.scrambleButton.position.y + this.scrambleButton.height / 2
        }
        return e
    }, u.prototype.showPowerupBling = function (t) {
        var i;
        switch (t) {
        case "time":
            i = this.timer;
            break;
        case "hint":
            i = this.hintButton;
            break;
        case "shuffle":
            i = this.scrambleButton
        }
        i && (i.scale.x = i.scale.y = .95, e.TweenUtils.bounceIn(i, {
            duration: 500
        }))
    }, u.prototype.handlePause = function () {
        clearTimeout(this.levelTimer), this.levelTimer = null, this.boardView.visible = !1, this.boardView.handlePause(), this.enableControls(!1), this.timeWarningPlaying && e.AudioManager.pauseSound("run_out_of_time")
    }, u.prototype.handleResume = function () {
        this.levelTimer = setTimeout(this.updateLevelTime.bind(this), 1e3), this.boardView.visible = !0, this.boardView.handleResume(), this.enableControls(!0), this.timeWarningPlaying && e.AudioManager.playSound("run_out_of_time")
    }, u.prototype.onShow = function () {
        e.Screen.prototype.onShow.call(this), e.MusicManager.stopMusic()
    }, u
}), define("loadingscreen", ["pixi", "absolute"], function (t, e) {
    var i = function (t, e) {
        this.initLoadingScreen(t, e)
    };
    return i.prototype = Object.create(e.Screen.prototype), i.prototype.initLoadingScreen = function (i, n) {
        e.Screen.call(this), this.ui = i, this.game = n, this.logo = t.Sprite.fromFrame("logo.png"), this.logo.position.x = (this.ui.width - this.logo.width) / 2, this.logo.position.y = .1 * this.ui.height, this.progressBar = new e.ProgressBar(t.Texture.fromFrame("loading_bar_frame.png"), t.Texture.fromFrame("loading_bar_marker.png")), this.progressBar.position.x = (this.ui.width - this.progressBar.width) / 2, this.progressBar.position.y = this.logo.position.y + this.logo.height + .1 * this.ui.height
    }, i.prototype.updateLoadingProgress = function (t) {
        this.progressBar.setProgress(t)
    }, i.prototype.onShow = function () {
        e.Screen.prototype.onShow.call(this), this.addChild(this.logo), this.addChild(this.progressBar)
    }, i.prototype.onHide = function () {
        e.Screen.prototype.onHide.call(this), this.removeChild(this.logo), this.removeChild(this.progressBar)
    }, i
}), define("dplui", ["absolute", "version", "sound/soundassets", "sound/audiosprites", "art/artassets", "mainmenu", "levelselectscreen", "gamescreen", "loadingscreen"], function (t, e, i, n, o, r, s, a, h) {
    var u = function (t, e, i, n) {
        this._initDPLUI(t, e, i, n)
    };
    return u.prototype = Object.create(t.GameUI.prototype), u.prototype._initDPLUI = function (e, i, n, o) {
        t.GameUI.call(this, i, n, o), this.game = e, this.currentScreen = null, this.modal = null
    }, u.prototype.load = function (t, i) {
        var n = this;
        this.currentScreen = null, this.loadArt(["loading.json"], (new e)
            .version, function () {}, function () {
                n.loadingScreen = new h(n, n.game), n.showScreen(n.loadingScreen), setTimeout(function () {
                    n.loadAssets(function (e) {
                        n.render(), n.loadingScreen.updateLoadingProgress(e), t(e)
                    }, i)
                }, 0)
            })
    }, u.prototype.loadAssets = function (h, u) {
        var l, c = this;
        l = t.AudioManager.usingWebAudio() ? i : [{
            id: "audiosprites",
            url: "audiosprites",
            volume: 100,
            spritemap: n
        }];
        var d = new t.AsyncQueue;
        d.pushTasks([
            function (t, i) {
                c.loadArt(o, (new e)
                    .version, t, i)
            },
            function (t, e) {
                c.loadSound(l, t, e)
            }]), d.run(h, function () {
            c.mainMenu = new r(c, c.game), c.levelSelect = new s(c, c.game), c.gameScreen = new a(c, c.game), t.MusicManager.setMuted(t.MusicManager.isMuted()), u(), c.animate()
        })
    }, u.prototype.showScreen = function (t) {
        this.currentScreen && (this.currentScreen.onHide(), this.hideCurrent()), this.currentScreen = t, this.currentScreen && (this.showCurrent(), this.currentScreen.onShow())
    }, u.prototype.showModal = function (t) {
        this.modal = t, this.renderOffScreen(), this.modalBG = new PIXI.Sprite(PIXI.Texture.fromCanvas(this.offScreenRenderer.view)), this.hideCurrent(), this.stage.addChild(this.modalBG), this.stage.addChild(this.modal), this.modal.onShow()
    }, u.prototype.hideModal = function () {
        this.modal && (this.modal.onHide(), this.stage.removeChild(this.modal), this.stage.removeChild(this.modalBG), this.showCurrent()), this.modal = null
    }, u.prototype.hideCurrent = function () {
        if (this.currentScreen) try {
            this.stage.removeChild(this.currentScreen)
        } catch (t) {}
    }, u.prototype.showCurrent = function () {
        if (this.currentScreen) try {
            this.stage.addChild(this.currentScreen)
        } catch (t) {}
    }, u.prototype.showGameScreen = function () {
        this.showScreen(this.gameScreen)
    }, u.prototype.showMainMenu = function () {
        this.showScreen(this.mainMenu)
    }, u.prototype.showLevelSelect = function () {
        this.showScreen(this.levelSelect)
    }, u.prototype.showOptionsMenu = function () {
        this.showModal(this.optionsMenu)
    }, u.prototype.win = function () {
        var t = this;
        setTimeout(function () {
            t.gameScreen.handlePause(), t.gameScreen.showScoreSummary()
        }, 0)
    }, u.prototype.noMoves = function () {
        this.gameScreen.handleNoMoves()
    }, u.prototype.configLevel = function (t) {
        this.gameScreen.configLevel(t)
    }, u.prototype.handlePause = function () {
        this.gameScreen.handlePause()
    }, u.prototype.handleResume = function () {
        this.gameScreen.handleResume()
    }, u
}),
function (t) {
    var e = {
        VERSION: "2.2.0",
        Result: {
            SUCCEEDED: 1,
            NOTRANSITION: 2,
            CANCELLED: 3,
            PENDING: 4
        },
        Error: {
            INVALID_TRANSITION: 100,
            PENDING_TRANSITION: 200,
            INVALID_CALLBACK: 300
        },
        WILDCARD: "*",
        ASYNC: "async",
        create: function (t, i) {
            var n = "string" == typeof t.initial ? {
                state: t.initial
            } : t.initial,
                o = t.terminal || t["final"],
                r = i || t.target || {}, s = t.events || [],
                a = t.callbacks || {}, h = {}, u = function (t) {
                    var i = t.from instanceof Array ? t.from : t.from ? [t.from] : [e.WILDCARD];
                    h[t.name] = h[t.name] || {};
                    for (var n = 0; i.length > n; n++) h[t.name][i[n]] = t.to || i[n]
                };
            n && (n.event = n.event || "startup", u({
                name: n.event,
                from: "none",
                to: n.state
            }));
            for (var l = 0; s.length > l; l++) u(s[l]);
            for (var c in h) h.hasOwnProperty(c) && (r[c] = e.buildEvent(c, h[c]));
            for (var c in a) a.hasOwnProperty(c) && (r[c] = a[c]);
            return r.current = "none", r.is = function (t) {
                return t instanceof Array ? t.indexOf(this.current) >= 0 : this.current === t
            }, r.can = function (t) {
                return !this.transition && (h[t].hasOwnProperty(this.current) || h[t].hasOwnProperty(e.WILDCARD))
            }, r.cannot = function (t) {
                return !this.can(t)
            }, r.error = t.error || function (t, e, i, n, o, r, s) {
                throw s || r
            }, r.isFinished = function () {
                return this.is(o)
            }, n && !n.defer && r[n.event](), r
        },
        doCallback: function (t, i, n, o, r, s) {
            if (i) try {
                return i.apply(t, [n, o, r].concat(s))
            } catch (a) {
                return t.error(n, o, r, s, e.Error.INVALID_CALLBACK, "an exception occurred in a caller-provided callback function", a)
            }
        },
        beforeAnyEvent: function (t, i, n, o, r) {
            return e.doCallback(t, t.onbeforeevent, i, n, o, r)
        },
        afterAnyEvent: function (t, i, n, o, r) {
            return e.doCallback(t, t.onafterevent || t.onevent, i, n, o, r)
        },
        leaveAnyState: function (t, i, n, o, r) {
            return e.doCallback(t, t.onleavestate, i, n, o, r)
        },
        enterAnyState: function (t, i, n, o, r) {
            return e.doCallback(t, t.onenterstate || t.onstate, i, n, o, r)
        },
        changeState: function (t, i, n, o, r) {
            return e.doCallback(t, t.onchangestate, i, n, o, r)
        },
        beforeThisEvent: function (t, i, n, o, r) {
            return e.doCallback(t, t["onbefore" + i], i, n, o, r)
        },
        afterThisEvent: function (t, i, n, o, r) {
            return e.doCallback(t, t["onafter" + i] || t["on" + i], i, n, o, r)
        },
        leaveThisState: function (t, i, n, o, r) {
            return e.doCallback(t, t["onleave" + n], i, n, o, r)
        },
        enterThisState: function (t, i, n, o, r) {
            return e.doCallback(t, t["onenter" + o] || t["on" + o], i, n, o, r)
        },
        beforeEvent: function (t, i, n, o, r) {
            return !1 === e.beforeThisEvent(t, i, n, o, r) || !1 === e.beforeAnyEvent(t, i, n, o, r) ? !1 : void 0
        },
        afterEvent: function (t, i, n, o, r) {
            e.afterThisEvent(t, i, n, o, r), e.afterAnyEvent(t, i, n, o, r)
        },
        leaveState: function (t, i, n, o, r) {
            var s = e.leaveThisState(t, i, n, o, r),
                a = e.leaveAnyState(t, i, n, o, r);
            return !1 === s || !1 === a ? !1 : e.ASYNC === s || e.ASYNC === a ? e.ASYNC : void 0
        },
        enterState: function (t, i, n, o, r) {
            e.enterThisState(t, i, n, o, r), e.enterAnyState(t, i, n, o, r)
        },
        buildEvent: function (t, i) {
            return function () {
                var n = this.current,
                    o = i[n] || i[e.WILDCARD] || n,
                    r = Array.prototype.slice.call(arguments);
                if (this.transition) return this.error(t, n, o, r, e.Error.PENDING_TRANSITION, "event " + t + " inappropriate because previous transition did not complete");
                if (this.cannot(t)) return this.error(t, n, o, r, e.Error.INVALID_TRANSITION, "event " + t + " inappropriate in current state " + this.current);
                if (!1 === e.beforeEvent(this, t, n, o, r)) return e.Result.CANCELLED;
                if (n === o) return e.afterEvent(this, t, n, o, r), e.Result.NOTRANSITION;
                var s = this;
                this.transition = function () {
                    return s.transition = null, s.current = o, e.enterState(s, t, n, o, r), e.changeState(s, t, n, o, r), e.afterEvent(s, t, n, o, r), e.Result.SUCCEEDED
                }, this.transition.cancel = function () {
                    s.transition = null, e.afterEvent(s, t, n, o, r)
                };
                var a = e.leaveState(this, t, n, o, r);
                return !1 === a ? (this.transition = null, e.Result.CANCELLED) : e.ASYNC === a ? e.Result.PENDING : this.transition ? this.transition() : void 0
            }
        }
    };
    "function" == typeof define ? define("statemachine", ["require"], function () {
        return e
    }) : t.StateMachine = e
}(this), define("level", [], function () {
    var t = function (t, e, i) {
        this.initLevel(t, e, i)
    };
    return t.prototype.initLevel = function (t, e, i) {
        this.levelNum = t, this.config = e, this.timeRemaining = e.timeGoal, this.availablePowerups = i || {
            hint: 0,
            shuffle: 0
        }, this.score = 0, this.comboBonus = 0, this.music = e.music || "game_bg_music"
    }, t.prototype.addTime = function (t) {
        this.timeRemaining = Math.min(this.config.timeGoal, this.timeRemaining + t)
    }, t
}), define("dpl", ["absolute", "dplui", "statemachine", "levelconfig", "level"], function (t, e, i, n, o) {
    var r = function (t, e, i) {
        this._initDPL(t, e, i)
    };
    return r.prototype = Object.create(t.Game.prototype), r.prototype._initDPL = function (i, r, s) {
        t.Game.call(this, "com.absoluteherogames.dpl", {
            version: 1,
            musicEnabled: !0,
            sfxEnabled: !0,
            lastLevel: 0,
            completedLevels: []
        }), this.currentLevelIndex = 0, this.currentLevel = new o(this.currentLevelIndex + 1, n.levels[this.currentLevelIndex], {
            hint: 4,
            shuffle: 4
        }), this.initStateMachine(), this.initEventBus(), this.ui = new e(this, i, r, s), this.savedMusicState = t.MusicManager.isMuted(), window.addEventListener("pagehide", function () {
            this.savedMusicState = t.MusicManager.isMuted(), t.AudioManager.muteAll()
        }.bind(this), !1), window.addEventListener("pageshow", function () {
            t.MusicManager.setMuted(this.savedMusicState), t.AudioManager.unmuteAll()
        }.bind(this), !1), document.addEventListener("visibilitychange", function () {
            document.hidden ? (this.savedMusicState = t.MusicManager.isMuted(), t.AudioManager.muteAll()) : (t.MusicManager.setMuted(this.savedMusicState), t.AudioManager.unmuteAll())
        }.bind(this), !1)
    }, r.prototype.load = function (t, e) {
        this.ui.load(t, e)
    }, r.prototype.initEventBus = function () {
        t.EventBus.addEventListener("start", this.fsm.start.bind(this.fsm)), t.EventBus.addEventListener("selectlevel", this.fsm.selectlevel.bind(this.fsm)), t.EventBus.addEventListener("play", this.fsm.play.bind(this.fsm)), t.EventBus.addEventListener("pause", this.fsm.pause.bind(this.fsm)), t.EventBus.addEventListener("resume", this.fsm.resume.bind(this.fsm)), t.EventBus.addEventListener("quit", this.fsm.quit.bind(this.fsm))
    }, r.prototype.initStateMachine = function () {
        this.fsm = i.create({
            events: [{
                name: "init",
                from: "none",
                to: "loading"
            }, {
                name: "start",
                from: "loading",
                to: "mainmenu"
            }, {
                name: "selectlevel",
                from: "mainmenu",
                to: "levelmenu"
            }, {
                name: "selectlevel",
                from: "playing",
                to: "levelmenu"
            }, {
                name: "selectlevel",
                from: "paused",
                to: "levelmenu"
            }, {
                name: "pause",
                from: "playing",
                to: "paused"
            }, {
                name: "resume",
                from: "paused",
                to: "playing"
            }, {
                name: "play",
                from: "levelmenu",
                to: "playing"
            }, {
                name: "play",
                from: "playing",
                to: "playing"
            }, {
                name: "play",
                from: "scoresummary",
                to: "playing"
            }, {
                name: "play",
                from: "paused",
                to: "playing"
            }, {
                name: "win",
                from: "playing",
                to: "scoresummary"
            }, {
                name: "lose",
                from: "playing",
                to: "scoresummary"
            }, {
                name: "quit",
                from: "playing",
                to: "mainmenu"
            }, {
                name: "quit",
                from: "paused",
                to: "mainmenu"
            }],
            callbacks: {
                onstart: this.onStart.bind(this),
                onmainmenu: this.onMainMenu.bind(this),
                onselectlevel: this.onSelectLevel.bind(this),
                onplay: this.onPlay.bind(this),
                onpause: this.onPause.bind(this),
                onresume: this.onResume.bind(this),
                onquit: this.onQuit.bind(this),
                onchangestate: function (e, i, n) {
                    t.Debug.log("CHANGED STATE: " + i + " to " + n)
                }
            }
        }), this.fsm.init()
    }, r.prototype.onStart = function () {}, r.prototype.onSelectLevel = function () {
        this.ui.showLevelSelect()
    }, r.prototype.onPlay = function () {
        this.ui.showGameScreen()
    }, r.prototype.onPause = function () {
        this.ui.handlePause()
    }, r.prototype.onResume = function () {
        this.ui.handleResume()
    }, r.prototype.onQuit = function () {
        this.ui.showMainMenu()
    }, r.prototype.onMainMenu = function () {
        this.ui.showMainMenu()
    }, r.prototype.playLevel = function (t) {
        var e = this.currentLevel;
        this.currentLevelIndex = t, this.currentLevel = new o(this.currentLevelIndex + 1, n.levels[this.currentLevelIndex], e.availablePowerups), this.ui.configLevel(this.currentLevel), this.fsm.play()
    }, r.prototype.playNextLevel = function () {
        this.currentLevelIndex + 1 < n.levels.length ? this.playLevel(this.currentLevelIndex + 1) : this.fsm.quit()
    }, r.prototype.start = function () {
        this.fsm.start()
    }, r.prototype.selectLevel = function () {
        this.fsm.selectlevel()
    }, r.prototype.quit = function () {
        this.fsm.quit()
    }, r.prototype.pause = function () {
        this.fsm.pause()
    }, r.prototype.resume = function () {
        this.fsm.resume()
    }, r
}),
function () {
    var t = {}, e = null,
        i = !0,
        n = !1;
    if ("undefined" != typeof AudioContext ? e = new AudioContext : "undefined" != typeof webkitAudioContext ? e = new webkitAudioContext : "undefined" != typeof Audio ? i = !1 : (i = !1, n = !0), i) {
        var o = e.createGain === void 0 ? e.createGainNode() : e.createGain();
        o.gain.value = 1, o.connect(e.destination)
    }
    var r = function () {
        this._volume = 1, this._muted = !1, this.usingWebAudio = i, this._howls = []
    };
    r.prototype = {
        volume: function (t) {
            var e = this;
            if (t = parseFloat(t), t && t >= 0 && 1 >= t) {
                e._volume = t, i && (o.gain.value = t);
                for (var n in e._howls)
                    if (e._howls.hasOwnProperty(n) && e._howls[n]._webAudio === !1)
                        for (var r = 0; e._howls[n]._audioNode.length > r; r++) e._howls[n]._audioNode[r].volume = e._howls[n]._volume * e._volume;
                return e
            }
            return i ? o.gain.value : e._volume
        },
        mute: function () {
            var t = this;
            t._muted = !0, i && (o.gain.value = 0);
            for (var e in t._howls)
                if (t._howls.hasOwnProperty(e) && t._howls[e]._webAudio === !1)
                    for (var n = 0; t._howls[e]._audioNode.length > n; n++) t._howls[e]._audioNode[n].muted = !0;
            return t
        },
        unmute: function () {
            var t = this;
            t._muted = !1, i && (o.gain.value = t._volume);
            for (var e in t._howls)
                if (t._howls.hasOwnProperty(e) && t._howls[e]._webAudio === !1)
                    for (var n = 0; t._howls[e]._audioNode.length > n; n++) t._howls[e]._audioNode[n].muted = !1;
            return t
        }
    };
    var s = new r,
        a = null;
    if (!n) {
        a = new Audio;
        var h = {
            mp3: !! a.canPlayType("audio/mpeg;")
                .replace(/^no$/, ""),
            opus: !! a.canPlayType('audio/ogg; codecs="opus"')
                .replace(/^no$/, ""),
            ogg: !! a.canPlayType('audio/ogg; codecs="vorbis"')
                .replace(/^no$/, ""),
            wav: !! a.canPlayType('audio/wav; codecs="1"')
                .replace(/^no$/, ""),
            m4a: !! (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;"))
                .replace(/^no$/, ""),
            webm: !! a.canPlayType('audio/webm; codecs="vorbis"')
                .replace(/^no$/, "")
        }
    }
    var u = function (t) {
        var e = this;
        e._autoplay = t.autoplay || !1, e._buffer = t.buffer || !1, e._duration = t.duration || 0, e._format = t.format || null, e._loop = t.loop || !1, e._loaded = !1, e._sprite = t.sprite || {}, e._src = t.src || "", e._pos3d = t.pos3d || [0, 0, -.5], e._volume = t.volume || 1, e._urls = t.urls || [], e._onload = [t.onload || function () {}], e._onloaderror = [t.onloaderror || function () {}], e._onend = [t.onend || function () {}], e._onpause = [t.onpause || function () {}], e._onplay = [t.onplay || function () {}], e._onendTimer = [], e._webAudio = i && !e._buffer, e._audioNode = [], e._webAudio && e._setupAudioNode(), s._howls.push(e), e.load()
    };
    if (u.prototype = {
        load: function () {
            var e = this,
                i = null;
            if (n) return e.on("loaderror"), void 0;
            for (var o = {
                mp3: h.mp3,
                opus: h.opus,
                ogg: h.ogg,
                wav: h.wav,
                m4a: h.m4a,
                weba: h.webm
            }, r = 0; e._urls.length > r; r++) {
                var a;
                if (e._format ? a = e._format : (a = e._urls[r].toLowerCase()
                    .match(/.+\.([^?]+)(\?|$)/), a = a && a.length >= 2 ? a[1] : e._urls[r].toLowerCase()
                    .match(/data\:audio\/([^?]+);/)[1]), o[a]) {
                    i = e._urls[r];
                    break
                }
            }
            if (!i) return e.on("loaderror"), void 0;
            if (e._src = i, e._webAudio) l(e, i);
            else {
                var u = new Audio;
                e._audioNode.push(u), u.src = i, u._pos = 0, u.preload = "auto", u.volume = s._muted ? 0 : e._volume * s.volume(), t[i] = e;
                var c = function () {
                    e._duration = u.duration, 0 === Object.getOwnPropertyNames(e._sprite)
                        .length && (e._sprite = {
                            _default: [0, 1e3 * e._duration]
                        }), e._loaded || (e._loaded = !0, e.on("load")), e._autoplay && e.play(), u.removeEventListener("loadstart", c, !1)
                };
                u.addEventListener("loadstart", c, !1), u.load()
            }
            return e
        },
        urls: function (t) {
            var e = this;
            return t ? (e._urls = t, e._loaded = !1, e.stop(), e.load(), e) : e._urls
        },
        play: function (t, i, n) {
            var o = this,
                r = n || 0;
            return t || (t = "_default"), o._loaded ? o._sprite[t] ? (o._inactiveNode(function (n) {
                n._sprite = t;
                var a, h = n._pos > 0 ? n._pos : o._sprite[t][0] / 1e3,
                    u = o._sprite[t][1] / 1e3 - h,
                    l = !(!o._loop && !o._sprite[t][2]),
                    c = "string" == typeof i ? i : Math.round(Date.now() * Math.random()) + "";
                if (function () {
                    var e = {
                        id: c,
                        sprite: t,
                        loop: l
                    };
                    a = setTimeout(function () {
                        !o._webAudio && l && o.stop(e.id, e.timer)
                            .play(t, e.id), o._webAudio && !l && (o._nodeById(e.id)
                                .paused = !0), o._webAudio || l || o.stop(e.id, e.timer), o.on("end", c)
                    }, 1e3 * u), o._onendTimer.push(a), e.timer = o._onendTimer[o._onendTimer.length - 1]
                }(), o._webAudio) n.id = c, n.paused = !1, d(o, [l, h, u], c), o._playStart = e.currentTime, n.gain.value = o._volume, n.bufferSource.start === void 0 ? n.bufferSource.noteGrainOn(e.currentTime + r, h, u) : n.bufferSource.start(e.currentTime + r, h, u);
                else {
                    if (4 !== n.readyState) return o._clearEndTimer(a),
                    function () {
                        var e = o,
                            s = t,
                            a = i,
                            h = n,
                            u = function () {
                                e.play(s, a, r), h.removeEventListener("canplaythrough", u, !1)
                            };
                        h.addEventListener("canplaythrough", u, !1)
                    }(), o;
                    setTimeout(function () {
                        n.id = c, n.currentTime = h, n.muted = s._muted, n.volume = o._volume * s.volume(), n.play()
                    }, 1e3 * r)
                }
                return o.on("play"), "function" == typeof i && i(c), o
            }), o) : ("function" == typeof i && i(), o) : (o.on("load", function () {
                o.play(t, i)
            }), o)
        },
        pause: function (t, i) {
            var n = this;
            if (!n._loaded) return n.on("play", function () {
                n.pause(t)
            }), n;
            n._clearEndTimer(i || 0);
            var o = t ? n._nodeById(t) : n._activeNode();
            if (o)
                if (n._webAudio) {
                    if (!o.bufferSource) return n;
                    o.paused = !0, o._pos += e.currentTime - n._playStart, o.bufferSource.stop === void 0 ? o.bufferSource.noteOff(0) : o.bufferSource.stop(0)
                } else o._pos = o.currentTime, o.pause();
            return n.on("pause"), n
        },
        stop: function (t, e) {
            var i = this;
            if (!i._loaded) return i.on("play", function () {
                i.stop(t)
            }), i;
            i._clearEndTimer(e || 0);
            var n = t ? i._nodeById(t) : i._activeNode();
            if (n)
                if (n._pos = 0, i._webAudio) {
                    if (!n.bufferSource) return i;
                    n.paused = !0, n.bufferSource.stop === void 0 ? n.bufferSource.noteOff(0) : n.bufferSource.stop(0)
                } else n.pause(), n.currentTime = 0;
            return i
        },
        mute: function (t) {
            var e = this;
            if (!e._loaded) return e.on("play", function () {
                e.mute(t)
            }), e;
            var i = t ? e._nodeById(t) : e._activeNode();
            return i && (e._webAudio ? i.gain.value = 0 : i.volume = 0), e
        },
        unmute: function (t) {
            var e = this;
            if (!e._loaded) return e.on("play", function () {
                e.unmute(t)
            }), e;
            var i = t ? e._nodeById(t) : e._activeNode();
            return i && (e._webAudio ? i.gain.value = e._volume : i.volume = e._volume), e
        },
        volume: function (t, e) {
            var i = this;
            if (t = parseFloat(t), !i._loaded) return i.on("play", function () {
                i.volume(t, e)
            }), i;
            if (t >= 0 && 1 >= t) {
                i._volume = t;
                var n = e ? i._nodeById(e) : i._activeNode();
                return n && (i._webAudio ? n.gain.value = t : n.volume = t * s.volume()), i
            }
            return i._volume
        },
        loop: function (t) {
            var e = this;
            return "boolean" == typeof t ? (e._loop = t, e) : e._loop
        },
        sprite: function (t) {
            var e = this;
            return "object" == typeof t ? (e._sprite = t, e) : e._sprite
        },
        pos: function (t, i) {
            var n = this;
            if (!n._loaded) return n.on("load", function () {
                n.pos(t)
            }), n;
            var o = i ? n._nodeById(i) : n._activeNode();
            return o ? n._webAudio ? t >= 0 ? (o._pos = t, n.pause(i)
                .play(o._sprite, i), n) : o._pos + (e.currentTime - n._playStart) : t >= 0 ? (o.currentTime = t, n) : o.currentTime : void 0
        },
        pos3d: function (t, e, i, n) {
            var o = this;
            if (e = void 0 !== e && e ? e : 0, i = void 0 !== i && i ? i : -.5, !o._loaded) return o.on("play", function () {
                o.pos3d(t, e, i, n)
            }), o;
            if (!(t >= 0 || 0 > t)) return o._pos3d;
            if (o._webAudio) {
                var r = n ? o._nodeById(n) : o._activeNode();
                r && (o._pos3d = [t, e, i], r.panner.setPosition(t, e, i))
            }
            return o
        },
        fadeIn: function (t, e, i) {
            var n = this,
                o = t,
                r = o / .01,
                s = e / r;
            if (!n._loaded) return n.on("load", function () {
                n.fadeIn(t, e, i)
            }), n;
            n.volume(0)
                .play();
            for (var a = 1; r >= a; a++)(function () {
                var e = Math.round(1e3 * (n._volume + .01 * a)) / 1e3,
                    o = t;
                setTimeout(function () {
                    n.volume(e), e === o && i && i()
                }, s * a)
            })();
            return n
        },
        fadeOut: function (t, e, i, n) {
            var o = this,
                r = o._volume - t,
                s = r / .01,
                a = e / s;
            if (!o._loaded) return o.on("play", function () {
                o.fadeOut(t, e, i, n)
            }), o;
            for (var h = 1; s >= h; h++)(function () {
                var e = Math.round(1e3 * (o._volume - .01 * h)) / 1e3,
                    r = t;
                setTimeout(function () {
                    o.volume(e, n), e === r && (i && i(), o.pause(n), o.on("end"))
                }, a * h)
            })();
            return o
        },
        _nodeById: function (t) {
            for (var e = this, i = e._audioNode[0], n = 0; e._audioNode.length > n; n++)
                if (e._audioNode[n].id === t) {
                    i = e._audioNode[n];
                    break
                }
            return i
        },
        _activeNode: function () {
            for (var t = this, e = null, i = 0; t._audioNode.length > i; i++)
                if (!t._audioNode[i].paused) {
                    e = t._audioNode[i];
                    break
                }
            return t._drainPool(), e
        },
        _inactiveNode: function (t) {
            for (var e = this, i = null, n = 0; e._audioNode.length > n; n++)
                if (e._audioNode[n].paused && 4 === e._audioNode[n].readyState) {
                    t(e._audioNode[n]), i = !0;
                    break
                }
            if (e._drainPool(), !i) {
                var o;
                e._webAudio ? (o = e._setupAudioNode(), t(o)) : (e.load(), o = e._audioNode[e._audioNode.length - 1], o.addEventListener("loadedmetadata", function () {
                    t(o)
                }))
            }
        },
        _drainPool: function () {
            var t, e = this,
                i = 0;
            for (t = 0; e._audioNode.length > t; t++) e._audioNode[t].paused && i++;
            for (t = e._audioNode.length - 1; t >= 0 && !(5 >= i); t--) e._audioNode[t].paused && (i--, e._audioNode.splice(t, 1))
        },
        _clearEndTimer: function (t) {
            var e = this,
                i = e._onendTimer.indexOf(t);
            i = i >= 0 ? i : 0, e._onendTimer[i] && (clearTimeout(e._onendTimer[i]), e._onendTimer.splice(i, 1))
        },
        _setupAudioNode: function () {
            var t = this,
                i = t._audioNode,
                n = t._audioNode.length;
            return i[n] = e.createGain === void 0 ? e.createGainNode() : e.createGain(), i[n].gain.value = t._volume, i[n].paused = !0, i[n]._pos = 0, i[n].readyState = 4, i[n].connect(o), i[n].panner = e.createPanner(), i[n].panner.setPosition(t._pos3d[0], t._pos3d[1], t._pos3d[2]), i[n].panner.connect(i[n]), i[n]
        },
        on: function (t, e) {
            var i = this,
                n = i["_on" + t];
            if ("function" == typeof e) n.push(e);
            else
                for (var o = 0; n.length > o; o++) e ? n[o].call(i, e) : n[o].call(i);
            return i
        },
        off: function (t, e) {
            for (var i = this, n = i["_on" + t], o = "" + e, r = 0; n.length > r; r++)
                if (o === "" + n[r]) {
                    n.splice(r, 1);
                    break
                }
            return i
        }
    }, i) var l = function (i, n) {
        if (n in t) i._duration = t[n].duration, c(i);
        else {
            var o = new XMLHttpRequest;
            o.open("GET", n, !0), o.responseType = "arraybuffer", o.onload = function () {
                e.decodeAudioData(o.response, function (e) {
                    e && (t[n] = e, c(i, e))
                })
            }, o.onerror = function () {
                i._webAudio && (i._buffer = !0, i._webAudio = !1, i._audioNode = [], delete i._gainNode, i.load())
            };
            try {
                o.send()
            } catch (r) {
                o.onerror()
            }
        }
    }, c = function (t, e) {
            t._duration = e ? e.duration : t._duration, 0 === Object.getOwnPropertyNames(t._sprite)
                .length && (t._sprite = {
                    _default: [0, 1e3 * t._duration]
                }), t._loaded || (t._loaded = !0, t.on("load")), t._autoplay && t.play()
        }, d = function (i, n, o) {
            var r = i._nodeById(o);
            r.bufferSource = e.createBufferSource(), r.bufferSource.buffer = t[i._src], r.bufferSource.connect(r.panner), r.bufferSource.loop = n[0], n[0] && (r.bufferSource.loopStart = n[1], r.bufferSource.loopEnd = n[1] + n[2])
        };
    "function" == typeof define && define.amd ? define("Howler", [], function () {
        return {
            Howler: s,
            Howl: u
        }
    }) : (window.Howler = s, window.Howl = u), window.Howler = s, window.Howl = u
}(), define("howler", function () {}), require.config({
    waitSeconds: 0,
    paths: {
        astar: "3rdparty/astar",
        pixi: "3rdparty/pixi",
        howler: "3rdparty/howler",
        absolute: "absolute/absolute",
        statemachine: "3rdparty/state-machine",
        tween: "3rdparty/tween",
        hammer: "3rdparty/hammer",
        art: "../art",
        sound: "../sound"
    },
    shim: {
        absolute: {
            deps: ["pixi"],
            exports: "Absolute"
        },
        pixi: {
            exports: "PIXI"
        },
        astar: {
            exports: "AStar"
        },
        statemachine: {
            exports: "StateMachine"
        },
        tween: {
            exports: "TWEEN"
        },
        hammer: {
            exports: "Hammer"
        }
    }
}), require(["absolute", "dpl", "howler"], function (t, e) {
    for (var i, n = !1, o = {}, r = /\+/g, s = /([^&=]+)=?([^&]*)/g, a = function (t) {
            return decodeURIComponent(t.replace(r, " "))
        }, h = window.location.search.substring(1), u = function () {
            var i = new e("container", 1536 * t.ScreenMetrics.getResScale(), 2008 * t.ScreenMetrics.getResScale(), n);
            i.load(function (e) {
                t.Debug.log(100 * e + "% loaded")
            }, function () {
                t.Debug.log("load complete"), i.start()
            })
        }; i = s.exec(h);) o[a(i[1])] = a(i[2]);
    n = o.debug && "true" === o.debug, t.Debug.enabled = n, t.ScreenMetrics.refresh(), t.ScreenMetrics.log();
    var l = !1;
    t.ScreenMetrics.isPortrait() ? u() : window.addEventListener("resize", function c() {
        t.ScreenMetrics.refresh(), t.ScreenMetrics.isPortrait() && !l && (window.removeEventListener("resize", c), l = !0, u())
    })
}), define("main", function () {});