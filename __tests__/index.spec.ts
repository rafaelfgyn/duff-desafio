import { getBeer, postBeer } from '../api/services';
import beers from '../api/db';

describe('getBeers', () => {

  it('Get me the correct beers 1', () => {
    const res = getBeer(-6);

    expect(res).toEqual([{
      "bestStyle": "Imperial Stouts",
      "playlist": {}
    }]);
  });

  it('Get me the correct beers 2', () => {

    const res = getBeer(-10);

    expect(res).toEqual([{
      "bestStyle": "Weissbier",
      "playlist": {}
    }]);
  });

  it('Get me the correct beers 3', () => {

    const res = getBeer(-7);

    expect(res).toEqual([{
      "bestStyle": "Imperial Stouts",
      "playlist": {}
    }]);
  });

  it('Get me the correct beers 4', () => {
    const res = getBeer(-3);

    expect(res).toEqual([{
      "bestStyle": "IPA",
      "playlist": {}
    },
    {
      "bestStyle": "Weizenbier",
      "playlist": {}
    }]);
  });
});

describe('postBeer', () => {

  it("post new beer", () => {

    const newBeer = {
      "name": "Weissbierrr",
      "min": -4,
      "max": 6
    };

    const res = postBeer(newBeer);

    const exists = beers.some(el => el.name === newBeer.name);

    expect(exists).toBe(true);
    expect(res).toStrictEqual({ message: "Nova cerveja inserida." });
  });

  it("post an existing beer", () => {

    const newBeer = {
      "name": "Weissbier",
      "min": -4,
      "max": 6
    };

    const res = postBeer(newBeer);

    expect(res).toStrictEqual({ message: "Essa cerveja já existe no banco de dados." });
  });
})

