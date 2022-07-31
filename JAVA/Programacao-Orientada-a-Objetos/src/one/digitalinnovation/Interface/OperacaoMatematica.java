package one.digitalinnovation.Interface;

public interface OperacaoMatematica {

    void soma(double operando1, double opreando2);

    void subtracao(double operando1, double opreando2);

    void multiplicacao(double operando1, double opreando2);

    void divisao(double operando1, double opreando2);

    interface OprecaoMatematica {

        void soma(double operando1, double operando2);

        void subtracao(double operando1, double operando2);

        void multiplicacao(double operando1, double operando2);

        void divisao(double operando1, double operando2);
    }
}
