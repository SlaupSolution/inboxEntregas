class Entrega {
  final String? id;
  final String nomeCliente;
  final String endereco;
  final String telefone;
  final String descricao;
  final String status;
  final DateTime dataCriacao;

  Entrega({
    this.id,
    required this.nomeCliente,
    required this.endereco,
    required this.telefone,
    required this.descricao,
    required this.status,
    required this.dataCriacao,
  });

  Map<String, dynamic> toJson() {
    return {
      'nome_cliente': nomeCliente,
      'endereco': endereco,
      'telefone': telefone,
      'descricao': descricao,
      'status': status,
      'data_criacao': dataCriacao.toIso8601String(),
    };
  }

  factory Entrega.fromJson(Map<String, dynamic> json) {
    return Entrega(
      id: json['id'].toString(),
      nomeCliente: json['nome_cliente'],
      endereco: json['endereco'],
      telefone: json['telefone'],
      descricao: json['descricao'],
      status: json['status'],
      dataCriacao: DateTime.parse(json['data_criacao']),
    );
  }
} 