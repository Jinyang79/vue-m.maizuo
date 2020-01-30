<template>
  <div>
    <ul>
      <router-link to="/film"
                   tag="li">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAA8FBMVEVHcEz/YBb/Xxf/Xxb/Xxb/Yhf/////Xxf/aBf/f3//Xxb/Xxb/ZjP/Xxf/Xxf/YRf/Xxb/Xxb/YRf/Xxb/Xxb/Xxb/Xxb/YRb/Zhn/YBf/Xxf/YBb/Xxf/YBf/ZBf/YBb/YBj/Xxn/Xxb/Xxb/Zh7/Xxb/YRb/Xxb/Xxb/Xxb/Zxz/bST/Xxb/Xxf/Xxb/Xxf/axr/Zhn/Yxb/YBf/YBb/Xxb/Xxb/Xxb/fyr/Xxb/YRj/Xxb/ZiL/Xxb/Xhb/YBb/Xxb/Xxb/Xxb/YBv/Xxb/Xxb/Xxb/YBb/YBb/Xxb/Yhr/Xxb/YBf/Yh3/YBb/XxbRpm7XAAAAT3RSTlMAZ25Q7EEBsRYChvoF3SBM/X1W88DF9nEKd7qijk0hv0oz05UZZlmy5swbDuFA62MTFBek777uWwb5P+oP4vK05baoJcuz2uvfezHxrxpasU+NwAAAAeZJREFUOMuVVVd74kAMHHBZG2JimjEthGJagNxBCCXlei/z///NPTiJ18Y523rbWX0raVYaASFzleFkNj1MZ5Oh4uJ1M8fCYWCOGJuveF4OSLve7PZH+1G/26zb5OAyzvGiR1reWkLWnkX2Lk48jypX+bMIeJZfUT1GwFyR4iom1r1gMRf2JAvxJZgFUvZdFnkdnErlTbkUHK9ZXAYVqSwEV+dVktXzAChQfamtR6G/XLxV2d61qb4JchDsPfPJO6miClsAWqwE0NWKPr/mgHkp7wY7ADpsSFieAxMA/tKS+dS4MGA8UJP5tTgGAEFPZkev8XZ7w5ougx4FANexjRCThiApIpjtuIDCepT2uTaPQnUqwJDNJ5YqDS0UFbrWqDxx1uQQmLDrM6+SrMlxjRpJ1f+LLifAjH0AKFXZ6jxQSK6Ci06L1RIA9DkDphwBQJltwLhhkOWctwbQZhkARpwCB+4BYMMdgK1Ep8YtgB03ALDn4eTVP/95NUOuGRjIwGuG33Ide53YA2vbcVN2Vs6vdxzXr4vYfs0wBcmzdf88W0CPwkw3sVl0IFFdjhHN0lNpVhYlBJYq72L09Rt//fgZr9qhzvIsfyl8zX9K3gWPj5+//P5O8kO6DWMqH9+/Oy0j7d5KsH/ddGZU6YjB5wAAAABJRU5ErkJggg==">
        <span>电影</span>
      </router-link>
      <router-link to="/cinema"
                   tag="li">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAA6lBMVEVHcEx5fYN6hIR5foKZmZl/f/95fYJ5fYJ5fYJ5fYJ5foJ8goJ7foN5fYJ/f5F6foJ5fYJ5fYJ7f4N6foKNjY16foJ9fYZ5fYJ5fYJ6fYJ5fYJ6fYR/f4h5fYN6f4R5fYJ9fYZ5fYJ5fYJ6foJ5fYN/f4Z5fYV6foJ5fYJ5fYN/f4x7f4N5fYKRkZF5fYJ/f5l5fYN5f4J5fYJ9fYJ6foJ5fYJ5foJ5fYJ5foJ5fYJ5hYX///97fYN5foJ5fYJ6fYR8goKHh4d6fYR6fYKLi4t5fYJ7fYN5fYJ8f4J5fYJ6f4J6fYOIiIh5fYJjB2qDAAAATXRSTlMAfBmyBQLz/ub7rCVfpg57+cs+iQnENdz0mLdRHIo43jnf7cB2JD13/bMURKQH+ArUVPEzvL1v78rDFQFyxvdNJxFHnAuZdOdKzF6lDxbVfRkAAAEcSURBVDjL7dLXbsJAFATQcV9jg43pvff03ntP5v9/Jw9gAgHb5AFFijKve6S9u3eAdcVTBEMjFG8sJYOR6TsA4BluWw6/Vu65/S4Ahe3oGXtUAAjK0VSmAECu8nTyn66farFcdv48m4tpS6lD5q9n4PmFSzrLaNU0iuT9rS+7l2TMMKuLNFFjBU9XzD/enanb+0cn5PMLKqwlFmicSRWwitM2H0sPgPrK9+/Upm4BAG5Sp3vm1s7G7iYAwNL5Nk87Ou3lv2RT78xSNcl40I+OJ5vSFBuJIPrRYOqLjgyzHryoummMfDoUlMKWKlEMJ3TAlhZGtRYHE8pmObwr5SZ9WorqVcmnhegOFkgAh5l0NE1nDvBnwxXzM/rL+QQoFmWj/JD7rwAAAABJRU5ErkJggg==">
        <span>影院</span>
      </router-link>
      <router-link to="/center"
                   tag="li">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAABuVBMVEVHcEx5fYKqqqp5fYJ/f5R5fYN5hYX///9/f/95fYJ/f59/f5l5fYJ/f4Z5fYJ5foJ5fYJ5fYJ5foJ5fYJ6fYJ5fYJ7foR6fYKRkZF5fYV6f4J6f4J5fYN/f4p5fYJ5f4V6fYJ5foN5foN6fYR5fYN/f797foN9fYJ5fYJ8f4J6foJ/f5F5fYN6foJ/f6p5fYJ7f4N9fYZ5foJ5fYN5fYJ6fYJ/f415fYJ5f4J5fYJ/f4h5fYN5fYJ5fYN5foN5fYN5fYJ6f4J7g4N5fYJ5foKNjY15f4J8f4J7f4N6fYOLi4t7f4N6f4R5fYJ5fYJ5fYN6foJ5fYV5fYN8goJ5f4V/f496foJ6fYR6f4R6foJ6fYJ5foN5fYJ5fYN7foN7f4N/f4x5fYJ6foKZmZl5fYJ5hYV5fYN5fYN5fYJ5fYN5fYN5fYN5fYN6foJ5fYV6foJ6f4J7foN6fYN5fYJ5foJ/f4d5foN6fYR5fYJ5fYN5fYJ6foJ5fYJ5foJ6fYR5fYV6foJ5f4J5fYJ5foJ5fYJ5fYKJiYl6f4R5foJ5foJ5foJ6hIR5fYJ5f4V6fYR6foJ6fYJ6fYJ5fYL3B6qLAAAAknRSTlMA8wP4DIoVAQLvCAriJPmyvd62u9X6VeoHO15ggBj+KNFnaWifBFsz506FDp1/Bss+N5WG/ZgSzFTsHHb21m148GQd8o8JXEo6owtENuH1m8Q/0C8qEIFLMneUY9/YWTwU230F5BehiO7a1M61hz17Yl+O5cggZU3gfPyJx41TQb5Syartvw04rJfKG6IsScDTnLdCNQgAAAHsSURBVBgZpcFldxpBAAXQByzs4hKSkABxd3d317q7u7u79/3ispwUZpeZDz29F//ja83v2M6vn99qK5GR/lzl+OL+AIkXbyr417MF4/U7mtbXYLd2j3R8qv6x+327dtlLxp/w7a728T2jK7C6FeLdBwnsmU+uk4+RYWwxBYvr5B0/BPO9N5G1yghEtXTdhtwMAxB0FfMEFFYZQZ4zzl4oGFtMIe8oT5+FnL7J6AryjrEEcvomN5aQd4gBHXJubryE4ACPQOEpn0NUxINQeMhXEMW5Dwr3+QgiL/dDQaMDohATUEjQBVET01BIswmiTt6AQhc7IerhKBRG2QNRCcd1ZDWcQtb5BmTp4yyByDfFRZgO8/hJZCydYwqmRU75YDHHCEyeHfLK8oWr5OUZmCKcg5XHwXKYOs6UMuPSRT9M5XR4YJNkqAxZ9WUL5dsdyCoLMYkCbpYGYRMspRuFjDBnp2ExPcuwAQktTF4bQc5IjAxrkNInx+htxZ5WL8cmdSg4q9iOnHZWOaEywagPOb4oJ6Dg8bIZgmZ6PZBrYwwWMbZBqrvCFYRF0FXRDQljkC2waeGggULVDPhh4w+wGgUGhjmEAkMcHoBdP4sgUcR+2DT2FVdCorK4rxFWdXRDys06WNXXaJDSapz4V38AuCN1L95kvMoAAAAASUVORK5CYII=">
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
div {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  ul {
    display: flex;
    li {
      position: relative;
      flex: 1;
      line-height: 50px;
      text-align: center;
      img {
        width: 21px;
        height: 21px;
        padding-top: 8px;
      }
      span {
        position: absolute;

        font-size: 10px;
        line-height: 12px;
        color: #797d82;
        top: 32px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
.active {
  color: orangered;
  border-bottom: 2px solid orangered;
}
</style>
