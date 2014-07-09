describe('#_attributesForIndex', function() {
  beforeEach(function() {
    this.el = Helper.create('#el');
  });

  it ('sets title with _getHint and given index', function() {
    // given
    var
      element  = this.el[0],
      hint     = 'double',
      options  = {},
      index    = 1,
      instance = new Raty(element, options);

    instance.opt.starType = 'i';

    spyOn(Raty.prototype, '_getHint').and.returnValue(hint);

    // when
    var attributes = instance._attributesForIndex(index);

    // then
    expect(attributes.title).toEqual(hint);
  });

  context('when :starType is img', function() {
    xit ('uses alt attribute with given index', function() {
      // given
      var
        element  = this.el[0],
        options  = {},
        index    = 1,
        instance = new Raty(element, options);

      instance.opt.starType = 'img';

      // when
      var attributes = instance._attributesForIndex(index);

      // then
      expect(attributes.alt).toEqual(index);
    });

    xit ('uses src with :path and returned _nameForIndex', function() {
      // given
      var
        element  = this.el[0],
        name     = 'starOff',
        options  = {},
        index    = 1,
        instance = new Raty(element, options);

      instance.opt.path     = 'path/';
      instance.opt.starOff  = 'star-off.png';
      instance.opt.starType = 'img';

      spyOn(Raty.prototype, '_nameForIndex').and.returnValue(name);

      // when
      var attributes = instance._attributesForIndex(index);

      // then
      expect(attributes.src).toEqual('path/star-off.png');
    });

    xit ('does not use data-alt', function() {
      // given
      var
        element  = this.el[0],
        name     = 'starOff',
        options  = {},
        index    = 1,
        instance = new Raty(element, options);

      instance.opt.starType = 'img';

      spyOn(Raty.prototype, '_nameForIndex'); // as_null_object

      // when
      var attributes = instance._attributesForIndex(index);

      // then
      expect(attributes['data-alt']).toBeUndefined();
    });

    xit ('does not use class', function() {
      // given
      var
        element  = this.el[0],
        name     = 'starOff',
        options  = {},
        index    = 1,
        instance = new Raty(element, options);

      instance.opt.starType = 'img';

      spyOn(Raty.prototype, '_nameForIndex'); // as_null_object

      // when
      var attributes = instance._attributesForIndex(index);

      // then
      expect(attributes['class']).toBeUndefined();
    });
  });

  context('when :starType is not img', function() {
    xit ('uses data-alt attribute with given index', function() {
      // given
      var
        element  = this.el[0],
        options  = {},
        index    = 1,
        instance = new Raty(element, options);

      instance.opt.starType = 'i';

      spyOn(Raty.prototype, '_nameForIndex'); // as_null_object

      // when
      var attributes = instance._attributesForIndex(index);

      // then
      expect(attributes['data-alt']).toEqual(index);
    });

    xit ('uses class with :path and returned _nameForIndex', function() {
      // given
      var
        element  = this.el[0],
        name     = 'starOff',
        options  = {},
        index    = 1,
        instance = new Raty(element, options);
console.log(instance.opt);
      instance.opt.path     = 'path/';
      instance.opt.starOff  = 'star-off.png';
      instance.opt.starType = 'img';

      spyOn(Raty.prototype, '_nameForIndex').and.returnValue(name);

      // when
      var attributes = instance._attributesForIndex(index);

      // then
      expect(attributes.src).toEqual('path/star-off.png');
    });
  });
});