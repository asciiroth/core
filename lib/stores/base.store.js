"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseStore = /** @class */ (function () {
    function BaseStore(items) {
        this._items = [];
        if (items) {
            this._items = items.slice();
        }
    }
    Object.defineProperty(BaseStore.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    BaseStore.prototype.find = function (item) {
        return this._items.find(function (_a) {
            var id = _a.id;
            return id === item.id;
        });
    };
    BaseStore.prototype.findIndex = function (item) {
        return this._items.findIndex(function (_a) {
            var id = _a.id;
            return id === item.id;
        });
    };
    BaseStore.prototype.add = function (items) {
        if (Array.isArray(items)) {
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                this.addSingleItem(item);
            }
            return items;
        }
        return this.addSingleItem(items);
    };
    BaseStore.prototype.addSingleItem = function (item) {
        item.id = this.generateId();
        this._items.push(item);
        return item;
    };
    BaseStore.prototype.delete = function (item) {
        this._items = this._items.filter(function (_item) { return _item.id !== item.id; });
    };
    BaseStore.prototype.update = function (item) {
        this._items = this._items.map(function (_item) {
            if (_item.id === item.id) {
                _item = item;
            }
            return item;
        });
    };
    BaseStore.prototype.generateId = function () {
        return "asciiroth_" + performance.now();
    };
    return BaseStore;
}());
exports.BaseStore = BaseStore;
//# sourceMappingURL=base.store.js.map