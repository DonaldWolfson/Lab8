const main = require('../assets/scripts/main');

describe('Main test group', () => {
    test('Icon Level 3 Volume', () => {
        expect(main.formatVolumeIconPath(67))
            .toMatch('./assets/media/icons/volume-level-3.svg');
    });
    test('Icon Level 2 Volume', () => {
        expect(main.formatVolumeIconPath(34))
            .toMatch('./assets/media/icons/volume-level-2.svg');
    });
    test('Icon Level 1 Volume', () => {
        expect(main.formatVolumeIconPath(1))
            .toMatch('./assets/media/icons/volume-level-1.svg');
    });
    test('Icon Level 0 Volume', () => {
        expect(main.formatVolumeIconPath(0))
            .toMatch('./assets/media/icons/volume-level-0.svg');
    });
});