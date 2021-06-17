import React from "react";
import {shallow} from "enzyme";
import App from './App'

describe('App', () => {
    const app = shallow(<App/>)

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('should initialize the `state` with an empty list of gifts', function () {
        expect(app.state().gifts).toEqual([])
    });

    describe('when clicking the `add-gift` button', () => {
        const id = 1;
        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        })

        afterEach(() => {
            app.setState({gifts: []})
        })

        it('should add new gift to `state` when clicking the `add gift` button', function () {
            expect(app.state().gifts).toEqual([{id}])
        });

        it('should adds a new gifts to the rendered list when clicking the `add gift` button', function () {
            expect(app.find('.gift-list').children().length).toEqual(id);
        });

        it('should create a gift component', function () {
            expect(app.find('Gift').exists()).toBe(true);
        });

        describe('when the user wants to remove the added gift', () => {
            beforeEach(() => {
                app.instance().removeGift(id);
            })

            it('should remove the gift from `state`', function () {
                expect(app.state().gifts).toEqual([]);
            });
        })
    });


})
