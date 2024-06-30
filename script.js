const envelope = document.querySelector('.envelope-wrapper');
const paragraph = document.getElementById('letter-paragraph');
const text = `Solo quería decirte lo importante que eres y lo mucho que significas para mí. He estado reflexionando sobre los errores que cometí y quiero pedirte sinceramente disculpas por todo el daño que te causé. Sé que fallé y que te hice pasar por momentos difíciles pero te prometo que he aprendido de mis errores y no quiero volver a repetirlos sabes que yo siempre "Trato de mejorar". Eras todo para mí y aún lo eres. No hay un solo día que no piense en ti y en lo feliz que éra contigo. Lo único que deseo ahora es tener la oportunidad de pasar tiempo contigo de nuevo, de mostrarte cuánto he cambiado y cuanto te valoro. Sé que recuperar tu confianza no sera fácil, pero estoy dispuesto a hacer todo lo necesario para demostrarte que puedo ser el compañero que mereces. Solo quiero que sepas que me importas más de lo que las palabras pueden expresar y que haré lo que sea para tener otra oportunidad contigo. Con todo mi cariño y sinceridad... \n Anxer`;
const words = text.split(' ');

function typeWriter(words, element, delay = 200) {
    element.innerHTML = '';
    let index = 0;
    function addWord() {
        if (index < words.length) {
            element.innerHTML += words[index] + ' ';
            if (element.innerHTML.includes('sinceramente disculpas')) {
                document.documentElement.style.setProperty('--bg-envelope-color', 'transparent');
                document.documentElement.style.setProperty('--envelope-tab', 'transparent');
                document.documentElement.style.setProperty('--envelope-cover', 'transparent');
                document.documentElement.style.setProperty('--shadow-color', 'transparent')
                document.querySelector('.letter').classList.add('expanded');
                document.querySelector('.heart').style.opacity = '0.25';
            }
            index++;
            setTimeout(addWord, delay);
        }
    }
    addWord();
}
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
    if (envelope.classList.contains('flap')) {
        setTimeout(() => {
            typeWriter(words, paragraph);
        }, 1000);
    }
});