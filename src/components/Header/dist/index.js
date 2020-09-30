"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ai_1 = require("react-icons/ai");
var ri_1 = require("react-icons/ri");
var gatsby_1 = require("gatsby");
var styles_1 = require("./styles");
var Logo_svg_1 = require("../../assets/Logo.svg");
var Header = function () {
    var _a = react_1.useState('hidden'), status = _a[0], setStatus = _a[1];
    function handleClick() {
        setStatus(status == 'hidden' ? 'show' : 'hidden');
    }
    function handleButtonClick() {
        var position = document.getElementById('contact').offsetTop;
        console.log(position);
    }
    return (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement("div", { className: "content" },
            react_1["default"].createElement(styles_1.LogoContainer, null,
                react_1["default"].createElement("img", { src: Logo_svg_1["default"], alt: "Zenix Tech" })),
            react_1["default"].createElement(styles_1.Menu, null,
                react_1["default"].createElement(gatsby_1.Link, { to: "/", className: "link" }, "P\u00E1gina Inicial"),
                react_1["default"].createElement(gatsby_1.Link, { to: "/AboutUs", className: "link" }, "Sobre N\u00F3s"),
                react_1["default"].createElement(gatsby_1.Link, { to: "/Services", className: "link" }, "Servi\u00E7os")),
            react_1["default"].createElement(styles_1.Burger, { className: status, id: "burger", onClick: handleClick },
                react_1["default"].createElement("div", { id: "one" }),
                react_1["default"].createElement("div", { id: "two" }),
                react_1["default"].createElement("div", { id: "three" })),
            react_1["default"].createElement(styles_1.RightMenu, { className: status, id: "menu-mobile" },
                react_1["default"].createElement("ul", null,
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(ai_1.AiOutlineHome, null),
                            react_1["default"].createElement("p", null, "P\u00E1gina inicial"))),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(ri_1.RiTeamLine, null),
                            react_1["default"].createElement("p", null, "Sobre n\u00F3s"))),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(ai_1.AiOutlineBulb, null),
                            react_1["default"].createElement("p", null, "Servi\u00E7os"))),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(ai_1.AiOutlinePhone, null),
                            react_1["default"].createElement("p", null, "Contato"))))),
            react_1["default"].createElement(styles_1.ContactButton, { onClick: handleButtonClick }, "Contato")),
        react_1["default"].createElement("div", { className: "line" })));
};
exports["default"] = Header;
