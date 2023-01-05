<template>
  <div class="profile">
    <div class="profile__img">
      <img
        src="https://i.picsum.photos/id/616/200/300.webp?hmac=zF08p-uO5usxYgL79zZ1akwrRhmtyCETGTZ7JsoiaiM"
        alt="pic"
      />
    </div>

    <div class="profile__info">
      <h1 class="profile__name">Irina</h1>
      <span class="profile__email">test@mail.ru</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;

  &__img {
    & img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }

  &__info {
    margin-left: 15px;
  }

  &__name {
    font-size: 18px;
    font-weight: 700;
    color: gray;
  }

  &__email {
    font-size: 15px;
    font-weight: 500;
    color: lightgray;
  }
}
</style>
