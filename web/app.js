document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input[type='text']");
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    // pegar salvo
    inputs.forEach((input, index) => {
        const salvo = localStorage.getItem("tarefa_" + index);
        if (salvo !== null) {
            input.value = salvo;
        }
    });
    checkboxes.forEach((check, index) => {
        const salvo = localStorage.getItem("check_" + index);
        if (salvo === "true") {
            check.checked = true;
        } 
    });

    //salvar
    inputs.forEach((input, index) => {
        input.addEventListener( "input", () => {
            localStorage.setItem("tarefa_" + index, input.value)
        });
    });
    checkboxes.forEach((check, index) => {
        check.addEventListener("change", () => {
            localStorage.setItem("check_" + index, check.checked)
        });
    });
});