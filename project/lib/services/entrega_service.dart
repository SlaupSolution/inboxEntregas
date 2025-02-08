import 'package:supabase_flutter/supabase_flutter.dart';
import '../models/entrega.dart';

class EntregaService {
  final SupabaseClient _supabase = Supabase.instance.client;

  Future<void> criarEntrega(Entrega entrega) async {
    await _supabase.from('entregas').insert(entrega.toJson());
  }

  Future<List<Entrega>> listarEntregas() async {
    final response = await _supabase
        .from('entregas')
        .select()
        .order('data_criacao', ascending: false);
    
    return (response as List)
        .map((item) => Entrega.fromJson(item))
        .toList();
  }

  Future<void> atualizarStatus(String id, String novoStatus) async {
    await _supabase
        .from('entregas')
        .update({'status': novoStatus})
        .eq('id', id);
  }
} 